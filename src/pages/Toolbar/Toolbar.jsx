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

const Toolbar = () => {
  const dispatch = useDispatch();
  const array = useSelector((state) => state.array);
  const algorithm = useSelector((state) => state.toolbar.algorithm);
  const isRunning = useSelector((state) => state.isRunning);

  const [arraySize, setArraySize] = useState(50);
  const [sortingSpeed, setSortingSpeed] = useState(50);

  useEffect(() => {
    generateArray(87);
  }, []);

  const generateArray = (length) => {
    let newArray = [];
    while (newArray.length < length) {
      newArray.push(Math.floor(Math.random() * 200) + 10);
    }
    dispatch(setArray(newArray));
    dispatch(setCurrentSorted([]));
  };

  const handleArraySizeChange = (evt) => {
    const newSize = Math.floor((parseInt(evt.target.value) + 3) * 1.65);
    setArraySize(newSize);
    generateArray(newSize);
  };

  const handleSortingSpeedChange = (evt) => {
    setSortingSpeed(parseInt(evt.target.value));
  };

  const updateAlgorithm = (algorithm) => {
    console.log(algorithm)
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
      doSort(array, dispatch, speed);
    }
  };

  const speed = 570 - sortingSpeed * 5 > 0 ? 570 - sortingSpeed * 5 : 0;
  const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";
  const cursor = isRunning ? "auto" : "pointer";

  useEffect(() => {
    console.log("algorithm", algorithm);
  }, [algorithm]);

  return (
    <div id="toolbar">
      <div
        id={!isRunning ? "generateArray" : "generateArrayX"}
        style={{ color: color, cursor: cursor }}
        onClick={!isRunning ? () => generateArray(array.length) : null}
      >
        Generate New Array
      </div>
      <div className="separator"></div>
      <div id="arraySize" style={{ color: color }}>
        Change Array Size
      </div>
      <input
        id="changeArraySize"
        type="range"
        min="0"
        max="100"
        style={{ background: color, cursor: cursor }}
        disabled={isRunning ? "disabled" : null}
        onChange={handleArraySizeChange}
        value={arraySize}
      />
      <div className="separator"></div>
      <div id="sortingSpeed" style={{ color: color }}>
        Change Sorting Speed
      </div>
      <input
        id="changeSortingSpeed"
        type="range"
        min="0"
        max="100"
        style={{ background: color, cursor: cursor }}
        disabled={isRunning ? "disabled" : null}
        onChange={handleSortingSpeedChange}
        value={sortingSpeed}
      />
      <div className="separator"></div>
      <div
        className={algorithm === "mergeSort" ? "currentAlgorithmButton" : "algorithmButton"}
        onClick={() => updateAlgorithm("mergeSort")}
      >
        Merge Sort
      </div>
      <div
        className={algorithm === "quickSort" ? "currentAlgorithmButton" : "algorithmButton"}
        onClick={() => updateAlgorithm("quickSort")}
      >
        Quick Sort
      </div>
      <div
        className={algorithm === "heapSort" ? "currentAlgorithmButton" : "algorithmButton"}
        onClick={() => updateAlgorithm("heapSort")}
      >
        Heap Sort
      </div>
      <div
        className={algorithm === "bubbleSort" ? "currentAlgorithmButton" : "algorithmButton"}
        onClick={() => updateAlgorithm("bubbleSort")}
      >
        Bubble Sort
      </div>
      <div
        className={algorithm === "selectionSort" ? "currentAlgorithmButton" : "algorithmButton"}
        onClick={() => updateAlgorithm("selectionSort")}
      >
        Selection Sort
      </div>
      <div
        className={algorithm === "insertionSort" ? "currentAlgorithmButton" : "algorithmButton"}
        onClick={() => updateAlgorithm("insertionSort")}
      >
        Insertion Sort
      </div>
      <div className="separator"></div>
      {algorithm && (
        <div
          id="sort"
          style={{ color: color, cursor: cursor }}
          onClick={!isRunning ? () => sort(algorithm, array, speed) : null}
        >
          Sort!
        </div>
      )}
    </div>
  );
};

export default Toolbar;