import { connect } from "react-redux";
import algorithm, { setAlgorithm } from "../../redux/reducers/algorithm";
import array, { setArray } from "../../redux/reducers/array";
import running, { setRunning } from "../../redux/reducers/running/running";
import { setCurrentSorted } from "../../redux/reducers/sorted";
import Toolbar from "./Toolbar";
import bubbleSort from "../../algorithms/bubbleSort";
import quickSort from "../../algorithms/quickSort";
import heapSort from "../../algorithms/heapsort";
import mergeSort from "../../algorithms/mergeSort";



const mapStateToProps=({array,algorithm,running,})=>({
    array,algorithm,running,
})

const mapDispatchToProps=(dispatch)=>({
    generateArray:(length)=>{
        let array=[];
        while (array.length < length) {
            array.push(Math.floor(Math.random() * 200) + 10);
        }
        dispatch(setArray(array));
        dispatch(setCurrentSorted([]));
    },
    updateAlgorithm: (algorithm) => {
        dispatch(setAlgorithm(algorithm));
      },
      sort: (algorithm, array, speed) => {
        let doSort = algorithm === "bubbleSort" ?
          bubbleSort : algorithm === "quickSort" ?
            quickSort : algorithm === "heapSort" ?
              heapSort : algorithm === "mergeSort" ?
                mergeSort : null;
        dispatch(setCurrentSorted([]));
        dispatch(setRunning(true));
        doSort(array, dispatch, speed);
      },
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);