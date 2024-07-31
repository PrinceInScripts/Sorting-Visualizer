// import { setArray } from "../redux/reducers/array";
// import { setRunning } from "../redux/reducers/running";
// import { setCurrentSelection } from "../redux/reducers/selection";
// import { setCurrentSorted } from "../redux/reducers/sorted";

// function selectionSort(stateArray, dispatch, speed) {
//   let array = stateArray.slice(0),
//       toDispatch = [];

//   for (let i = 0; i < array.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < array.length; j++) {
//       toDispatch.push([minIndex, j]);
//       if (array[j] < array[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       toDispatch.push([i, minIndex, true]);
//       let temp = array[i];
//       array[i] = array[minIndex];
//       array[minIndex] = temp;
//       toDispatch.push(array.slice(0));
//       toDispatch.push([]);
//     }
//     toDispatch.push([true, i]);
//   }
//   toDispatch.push([true, array.length - 1]);
//   handleDispatch(toDispatch, dispatch, array, speed);
//   return array;
// }

// function handleDispatch(toDispatch, dispatch, array, speed) {
//   if (!toDispatch.length) {
//     dispatch(setCurrentSelection(array.map((num, index) => index)));
//     setTimeout(() => {
//       dispatch(setCurrentSelection([]));
//       dispatch(setCurrentSorted(array.map((num, index) => index)));
//       dispatch(setRunning(false));
//     }, 900);
//     return;
//   }
//   let dispatchFunction = toDispatch[0].length > 3 ?
//     setArray : toDispatch[0].length === 3 || toDispatch[0].length === 0 ?
//       setCurrentSelection : toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean" ?
//         setCurrentSorted : setCurrentSelection;
//   dispatch(dispatchFunction(toDispatch.shift()));
//   setTimeout(() => {
//     handleDispatch(toDispatch, dispatch, array, speed);
//   }, speed);
// }

// export default selectionSort;

import { setArray } from "../redux/reducers/array";
import { setRunning } from "../redux/reducers/running";
import { setCurrentSelection } from "../redux/reducers/selection";
import { setCurrentSorted } from "../redux/reducers/sorted";

function selectionSort(stateArray, dispatch, speed) {
  let array = stateArray.slice(0),
    toDispatch = [];

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      toDispatch.push([minIndex, j]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      toDispatch.push([i, minIndex, true]);
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
      toDispatch.push(array.slice(0));
      toDispatch.push([]);
    }
    toDispatch.push([true, i]);
  }
  toDispatch.push([true, array.length - 1]);
  handleDispatch(toDispatch, dispatch, array, speed);
  return array;
}

function handleDispatch(toDispatch, dispatch, array, speed) {
  if (!toDispatch.length) {
    dispatch(setCurrentSelection(array.map((num, index) => index)));
    setTimeout(() => {
      dispatch(setCurrentSelection([]));
      dispatch(setCurrentSorted(array.map((num, index) => index)));
      dispatch(setRunning(false));
    }, 900);
    return;
  }
  let dispatchFunction =
    toDispatch[0].length > 3
      ? setArray
      : toDispatch[0].length === 3 || toDispatch[0].length === 0
      ? setCurrentSelection
      : toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean"
      ? setCurrentSorted
      : setCurrentSelection;
  dispatch(dispatchFunction(toDispatch.shift()));
  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, array, speed);
  }, speed);
}

export default selectionSort;
