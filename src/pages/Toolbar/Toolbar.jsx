// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./Toolbar.css";
// import { setArray } from "../../redux/reducers/array/index.js";
// import { setAlgorithm } from "../../redux/reducers/Toolbar/index.js";
// import { setCurrentSorted } from "../../redux/reducers/sorted/index.js";
// import { setRunning } from "../../redux/reducers/running/index.js";
// import bubbleSort from "../../algorithms/bubbleSort.js";
// import quickSort from "../../algorithms/quickSort.js";
// import heapSort from "../../algorithms/heapsort.js";
// import mergeSort from "../../algorithms/mergeSort.js";
// import selectionSort from "../../algorithms/selectionSort.js";
// import insertionSort from "../../algorithms/insertionSort.js";
// import AlgorithmsDetails from "../AlgorthitmInfo/AlgorthitmDetails.js";

// const Toolbar = () => {
//   const dispatch = useDispatch();
//   const array = useSelector((state) => state.array);
//   const algorithm = useSelector((state) => state.toolbar.algorithm);
//   const isRunning = useSelector((state) => state.running);

//   const [details, setDetails] = useState(null);

//   const [arraySize, setArraySize] = useState(50);
//   const [sortingSpeed, setSortingSpeed] = useState(50);

//   useEffect(() => {
//     generateArray(87);
//   }, []);

//   const generateArray = (length) => {
//     let newArray = [];
//     while (newArray.length < length) {
//       newArray.push(Math.floor(Math.random() * 200) + 10);
//     }
//     dispatch(setArray(newArray));
//     dispatch(setCurrentSorted([]));
//   };

//   const handleArraySizeChange = (evt) => {
//     const newSize = Math.min(Math.floor((parseInt(evt.target.value) + 3) * 1.65), 100);
//     setArraySize(newSize);
//     generateArray(newSize);
//   };

//   const handleSortingSpeedChange = (evt) => {
//     setSortingSpeed(parseInt(evt.target.value));
//   };

//   const updateAlgorithm = (algorithm) => {
//     dispatch(setAlgorithm(algorithm));
//   };

//   const sort = (algorithm, array, speed) => {
//     const sortAlgorithms = {
//       bubbleSort,
//       quickSort,
//       heapSort,
//       mergeSort,
//       selectionSort,
//       insertionSort,
//     };

//     const doSort = sortAlgorithms[algorithm];
//     if (doSort) {
//       dispatch(setCurrentSorted([]));
//       dispatch(setRunning(true));
//       doSort(array, dispatch, speed).then(() => dispatch(setRunning(false)));
//     }
//   };

//   const speed = 570 - sortingSpeed * 5 > 0 ? 570 - sortingSpeed * 5 : 0;
//   const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";
//   const cursor = isRunning ? "auto" : "pointer";

//   useEffect(() => {
//     const foundDetails = Object.values(AlgorithmsDetails).find(
//       (alg) => alg.name === algorithm
//     );
//     setDetails(foundDetails);
//   }, [algorithm]);

//   const sortingName=(name)=>{
//     if(name=="bubbleSort") return "Bubble Sort";
//     else if(name=="selectionSort") return "Selection Sort";
//     else if(name=="quickSort") return "Quick Sort";
//     else if(name=="heapSort") return "Heap Sort";
//     else if(name=="mergeSort") return "Merge Sort";
//     else if(name=="insertionSort") return "Insertion Sort";
//  }

//   return (
//     <>
//       <div id="toolbar" className="flex flex-col gap-5">
//         <div
//           id={!isRunning ? "generateArray" : "generateArrayX"}
//           style={{ color: color, cursor: cursor }}
//           onClick={!isRunning ? () => generateArray(array.length) : null}
//           type="button"
//           className="text-white bg-gradient-to-r font-bold font-serif from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-xl rounded-lg px-5 py-2.5 text-center me-2 mb-2"
//         >
//           Generate New Array
//         </div>
//         <div id="arraySize" className="font-bold font-serif" style={{ color: color }}>
//           Change Array Size {`(${arraySize})`}
//         </div>
//         <input
//           id="changeArraySize"
//           type="range"
//           min="0"
//           max="100"
//           style={{ background: color, cursor: cursor }}
//           disabled={isRunning}
//           onChange={handleArraySizeChange}
//           value={arraySize}
//         />
//         <div id="sortingSpeed" className="font-bold font-serif" style={{ color: color }}>
//           Change Sorting Speed
//         </div>
//         <input
//           id="changeSortingSpeed"
//           type="range"
//           min="0"
//           max="100"
//           style={{ background: color, cursor: cursor }}
//           disabled={isRunning}
//           onChange={handleSortingSpeedChange}
//           value={sortingSpeed}
//         />
//         <select
//           id="algorithmSelect"
//           style={{ background: color, cursor: cursor }}
//           className="font-serif font-bold text-gray-900"
//           disabled={isRunning}
//           value={algorithm}
//           onChange={(e) => updateAlgorithm(e.target.value)}
//         >
//           <option value="" className="font-serif font-bold" disabled>
//             Select Sorting Algorithm
//           </option>
//           <option value="mergeSort" className="font-serif font-bold text-gray-900">
//             Merge Sort
//           </option>
//           <option value="quickSort" className="font-serif font-bold text-gray-900">
//             Quick Sort
//           </option>
//           <option value="heapSort" className="font-serif font-bold text-gray-900">
//             Heap Sort
//           </option>
//           <option value="bubbleSort" className="font-serif font-bold text-gray-900">
//             Bubble Sort
//           </option>
//           <option value="selectionSort" className="font-serif font-bold text-gray-900">
//             Selection Sort
//           </option>
//           <option value="insertionSort" className="font-serif font-bold text-gray-900">
//             Insertion Sort
//           </option>
//         </select>
//         <div className="flex">
//           {algorithm && (
//             <div
//               id="sort"
//               style={{ color: color, cursor: cursor }}
//               onClick={!isRunning ? () => sort(algorithm, array, speed) : null}
//             >
//               <button
//                 type="button"
//                 className="focus:outline-none font-bold font-serif text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//                 disabled={isRunning}
//               >
//                 Sort !
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       {details && (
//         <div className="flex justify-center flex-col text-white gap-5 mt-10 ">
//                 <h2 className="text-2xl   font-serif  font-bold ">{sortingName(details.name)}</h2>

//                 <p className='text-lg font-semibold font-serif'>Time Complexity
//       <ol>
//             <li>{details.timeComplexity.bestCase}</li>
//             <li>{details.timeComplexity.averageCase}</li>
//             <li>{details.timeComplexity.worstCase}</li>
//           </ol>
//       </p>
//       <p className='text-lg font-semibold font-serif'>Space Complexity
//         <ol>
//           <li>{details.spaceComplexity}</li>
//           </ol></p>
//         </div>
//       )}
//     </>
//   );
// };

// export default Toolbar;


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Toolbar.css";
import { setArray } from "../../redux/reducers/array/index.js";
import { setAlgorithm } from "../../redux/reducers/Toolbar/index.js";
import { setCurrentSorted } from "../../redux/reducers/sorted/index.js";
import { setRunning } from "../../redux/reducers/running/index.js";
import bubbleSort from "../../algorithms/bubbleSort.js";
import quickSort from "../../algorithms/quickSort.js";
import heapSort from "../../algorithms/heapsort.js";
import mergeSort from "../../algorithms/mergeSort.js";
import selectionSort from "../../algorithms/selectionSort.js";
import insertionSort from "../../algorithms/insertionSort.js";
import AlgorithmsDetails from "../AlgorthitmInfo/AlgorthitmDetails.js";

const Toolbar = () => {
  const dispatch = useDispatch();
  const array = useSelector((state) => state.array);
  const algorithm = useSelector((state) => state.toolbar.algorithm);
  const isRunning = useSelector((state) => state.running);

  const [details, setDetails] = useState(null);

  const [arraySize, setArraySize] = useState(() => {
    return window.innerWidth < 768 ? 25 : 50;
  });
  const [sortingSpeed, setSortingSpeed] = useState(50);

  useEffect(() => {
    generateArray(arraySize);
  }, [arraySize]);

  const generateArray = (length) => {
    let newArray = [];
    while (newArray.length < length) {
      newArray.push(Math.floor(Math.random() * 200) + 10);
    }
    dispatch(setArray(newArray));
    dispatch(setCurrentSorted([]));
  };

  const handleArraySizeChange = (evt) => {
    let newSize=0;
    if(window.innerWidth < 768 ){
       newSize = Math.min(Math.floor((parseInt(evt.target.value) + 3) * 1.65), 25);
    } else {
       newSize = Math.min(Math.floor((parseInt(evt.target.value) + 3) * 1.65), 100);
    }
    
    setArraySize(newSize);
    generateArray(newSize);
  };

  const handleSortingSpeedChange = (evt) => {
    setSortingSpeed(parseInt(evt.target.value));
  };

  const updateAlgorithm = (algorithm) => {
    dispatch(setAlgorithm(algorithm));
  };

  const sort = (algorithm, array, speed) => {
    const sortAlgorithms = {
      bubbleSort,
      quickSort,
      heapSort,
      mergeSort,
      selectionSort,
      insertionSort,
    };

    const doSort = sortAlgorithms[algorithm];
    if (doSort) {
      dispatch(setCurrentSorted([]));
      dispatch(setRunning(true));
      doSort(array, dispatch, speed).then(() => dispatch(setRunning(false)));
    }
  };

  const speed = 570 - sortingSpeed * 5 > 0 ? 570 - sortingSpeed * 5 : 0;
  const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";
  const cursor = isRunning ? "auto" : "pointer";

  useEffect(() => {
    const foundDetails = Object.values(AlgorithmsDetails).find(
      (alg) => alg.name === algorithm
    );
    setDetails(foundDetails);
  }, [algorithm]);

  const sortingName = (name) => {
    if (name === "bubbleSort") return "Bubble Sort";
    else if (name === "selectionSort") return "Selection Sort";
    else if (name === "quickSort") return "Quick Sort";
    else if (name === "heapSort") return "Heap Sort";
    else if (name === "mergeSort") return "Merge Sort";
    else if (name === "insertionSort") return "Insertion Sort";
  };

  return (
    <>
      <div id="toolbar" className="flex flex-col gap-5">
        <div
          id={!isRunning ? "generateArray" : "generateArrayX"}
          style={{ color: color, cursor: cursor }}
          onClick={!isRunning ? () => generateArray(array.length) : null}
          type="button"
          className="text-white bg-gradient-to-r font-bold font-serif from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-xl rounded-lg px-5 py-2.5 text-center me-2 mb-2"
        >
          Generate New Array
        </div>
        <div id="arraySize" className="font-bold font-serif" style={{ color: color }}>
          Change Array Size {`(${arraySize})`}
        </div>
        <input
          id="changeArraySize"
          type="range"
          min="0"
          max="100"
          style={{ background: color, cursor: cursor }}
          disabled={isRunning}
          onChange={handleArraySizeChange}
          value={arraySize}
        />
        <div id="sortingSpeed" className="font-bold font-serif" style={{ color: color }}>
          Change Sorting Speed
        </div>
        <input
          id="changeSortingSpeed"
          type="range"
          min="0"
          max="100"
          style={{ background: color, cursor: cursor }}
          disabled={isRunning}
          onChange={handleSortingSpeedChange}
          value={sortingSpeed}
        />
        <select
          id="algorithmSelect"
          style={{ background: color, cursor: cursor }}
          className="font-serif font-bold text-gray-900"
          disabled={isRunning}
          value={algorithm}
          onChange={(e) => updateAlgorithm(e.target.value)}
        >
          <option value="" className="font-serif font-bold" disabled>
            Select Sorting Algorithm
          </option>
          <option value="mergeSort" className="font-serif font-bold text-gray-900">
            Merge Sort
          </option>
          <option value="quickSort" className="font-serif font-bold text-gray-900">
            Quick Sort
          </option>
          <option value="heapSort" className="font-serif font-bold text-gray-900">
            Heap Sort
          </option>
          <option value="bubbleSort" className="font-serif font-bold text-gray-900">
            Bubble Sort
          </option>
          <option value="selectionSort" className="font-serif font-bold text-gray-900">
            Selection Sort
          </option>
          <option value="insertionSort" className="font-serif font-bold text-gray-900">
            Insertion Sort
          </option>
        </select>
        <div className="flex">
          {algorithm && (
            <div
              id="sort"
              style={{ color: color, cursor: cursor }}
              onClick={!isRunning ? () => sort(algorithm, array, speed) : null}
            >
              <button
                type="button"
                className="focus:outline-none font-bold font-serif text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                disabled={isRunning}
              >
                Sort!
              </button>
            </div>
          )}
        </div>
      </div>
      {details && (
        <div className="flex justify-center flex-col text-white gap-5 mt-10">
          <h2 className="text-2xl font-serif font-bold">{sortingName(details.name)}</h2>
          <p className="text-lg font-semibold font-serif">
            Time Complexity
            <ol>
              <li>Best Case: {details.timeComplexity.bestCase}</li>
              <li>Average Case: {details.timeComplexity.averageCase}</li>
              <li>Worst Case: {details.timeComplexity.worstCase}</li>
            </ol>
          </p>
          <p className="text-lg font-semibold font-serif">
            Space Complexity
            <ol>
              <li>{details.spaceComplexity}</li>
            </ol>
          </p>
        </div>
      )}
    </>
  );
};

export default Toolbar;