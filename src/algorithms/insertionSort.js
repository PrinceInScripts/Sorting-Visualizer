// import { setArray } from "../redux/reducers/array";
// import { setCurrentInsertion } from "../redux/reducers/insertion";
// import { setRunning } from "../redux/reducers/running";
// import { setCurrentSorted } from "../redux/reducers/sorted";

// function insertionSort(stateArray, dispatch, speed) {
//   let array = stateArray.slice(0),
//       toDispatch = [];

//   for (let i = 1; i < array.length; i++) {
//     let current = array[i];
//     let j = i - 1;
//     while (j >= 0 && array[j] > current) {
//       toDispatch.push([j, j + 1]);
//       toDispatch.push([j, j + 1, true]);
//       array[j + 1] = array[j];
//       j--;
//       toDispatch.push(array.slice(0));
//       toDispatch.push([]);
//     }
//     array[j + 1] = current;
//     toDispatch.push(array.slice(0));
//     toDispatch.push([]);
//   }
//   handleDispatch(toDispatch, dispatch, array, speed);
//   return array;
// }

// function handleDispatch(toDispatch, dispatch, array, speed) {
//   if (!toDispatch.length) {
//     dispatch(setCurrentInsertion(array.map((num, index) => index)));
//     setTimeout(() => {
//       dispatch(setCurrentInsertion([]));
//       dispatch(setCurrentSorted(array.map((num, index) => index)));
//       dispatch(setRunning(false));
//     }, 900);
//     return;
//   }
//   let dispatchFunction = toDispatch[0].length > 3 ?
//     setArray : toDispatch[0].length === 3 || toDispatch[0].length === 0 ?
//       setCurrentInsertion : toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean" ?
//         setCurrentSorted : setCurrentInsertion;
//   dispatch(dispatchFunction(toDispatch.shift()));
//   setTimeout(() => {
//     handleDispatch(toDispatch, dispatch, array, speed);
//   }, speed);
// }

// export default insertionSort;

import { setArray } from "../redux/reducers/array";
import { setCurrentInsertion } from "../redux/reducers/insertion";
import { setRunning } from "../redux/reducers/running";
import { setCurrentSorted } from "../redux/reducers/sorted";

function insertionSort(stateArray, dispatch, speed) {
  let array = stateArray.slice(0),
    toDispatch = [];

  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      toDispatch.push([j, j + 1]);
      toDispatch.push([j, j + 1, true]);
      array[j + 1] = array[j];
      j--;
      toDispatch.push(array.slice(0));
      toDispatch.push([]);
    }
    array[j + 1] = current;
    toDispatch.push(array.slice(0));
    toDispatch.push([]);
  }
  handleDispatch(toDispatch, dispatch, array, speed);
  return array;
}

function handleDispatch(toDispatch, dispatch, array, speed) {
  if (!toDispatch.length) {
    dispatch(setCurrentInsertion(array.map((num, index) => index)));
    setTimeout(() => {
      dispatch(setCurrentInsertion([]));
      dispatch(setCurrentSorted(array.map((num, index) => index)));
      dispatch(setRunning(false));
    }, 900);
    return;
  }
  let dispatchFunction =
    toDispatch[0].length > 3
      ? setArray
      : toDispatch[0].length === 3 || toDispatch[0].length === 0
      ? setCurrentInsertion
      : toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean"
      ? setCurrentSorted
      : setCurrentInsertion;
  dispatch(dispatchFunction(toDispatch.shift()));
  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, array, speed);
  }, speed);
}

export default insertionSort;
