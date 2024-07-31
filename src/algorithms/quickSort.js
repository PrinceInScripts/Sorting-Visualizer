import { setArray } from "../redux/reducers/array";
import { setPivot } from "../redux/reducers/pivot";
import { setCurrentQuick } from "../redux/reducers/quick";
import { setRunning } from "../redux/reducers/running/running";
import { setCurrentSorted } from "../redux/reducers/sorted";
import { setCurrentSwapper } from "../redux/reducers/swappers";



function quickSort(stateArray, dispatch, speed) {
    let array = stateArray.slice(0),
        toDispatch = [];
    quickSortHelper(array, 0, array.length - 1, toDispatch);
    handleDispatch(toDispatch, dispatch, array, speed);
    return array;
  }
  
  function quickSortHelper(array, start, end, toDispatch) {
    if (start >= end) {
      toDispatch.push([true, start]);
      return;
    }
    let pivot = start,
        left = start + 1,
        right = end;
    toDispatch.push(pivot);
    toDispatch.push([left, right]);
    while (right >= left) {
      if (array[right] < array[pivot] && array[left] > array[pivot]) {
        toDispatch.push([left, right, true]);
        let temp = array[right];
        array[right] = array[left];
        array[left] = temp;
        toDispatch.push(array.slice(0));
        toDispatch.push([]);
      }
      if (array[right] >= array[pivot]) {
        right--;
      }
      if (array[left] <= array[pivot]) {
        left++;
      }
      if (right >= left) toDispatch.push([left, right]);
    }
    toDispatch.push([pivot, right]);
    if (pivot !== right) {
      let temp = array[right];
      array[right] = array[pivot];
      array[pivot] = temp;
      toDispatch.push([pivot, right, true]);
      toDispatch.push(array.slice(0));
      toDispatch.push([]);
      toDispatch.push([true, right]);
    }
    quickSortHelper(array, start, right - 1, toDispatch);
    quickSortHelper(array, right + 1, end, toDispatch);
  }
  
  function handleDispatch(toDispatch, dispatch, array, speed) {
    if (!toDispatch.length) {
      dispatch(setPivot(null));
      dispatch(setCurrentQuick(array.map((num, index) => index)));
      setTimeout(() => {
        dispatch(setCurrentQuick([]));
        dispatch(setRunning(false));
      }, 900);
      return;
    }
    let dispatchFunction = !(toDispatch[0] instanceof Array) ? setPivot : 
                           toDispatch[0].length > 3 ? setArray : 
                           toDispatch[0].length !== 2 ? setCurrentSwapper : 
                           toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean" ? setCurrentSorted : 
                           setCurrentQuick;
    dispatch(dispatchFunction(toDispatch.shift()));
    if (dispatchFunction === setPivot) dispatch(setCurrentQuick(toDispatch.shift()));
    setTimeout(() => {
      handleDispatch(toDispatch, dispatch, array, speed);
    }, speed);
  }
  
  export default quickSort;