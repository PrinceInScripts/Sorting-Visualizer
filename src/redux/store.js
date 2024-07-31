import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "./reducers/array";
import runningReducer from "./reducers/running";
import sortedReducer from "./reducers/sorted";
import swapperReducer from "./reducers/swappers";
import bubbleReducer from "./reducers/bubble";
import heapReducer from "./reducers/heap";
import insertionReducer from "./reducers/insertion";
import quickReducer from "./reducers/quick";
import mergeReducer from "./reducers/merge";
import selectionReducer from "./reducers/selection";
import toolbarReducer from "./reducers/Toolbar";

const store = configureStore({
  reducer: {
    array: arrayReducer,
    running: runningReducer,
    sorted: sortedReducer,
    swappers: swapperReducer,
    bubble: bubbleReducer,
    heap: heapReducer,
    insertion: insertionReducer,
    quick: quickReducer,
    merge: mergeReducer,
    selection: selectionReducer,
    toolbar: toolbarReducer,
  },
});

export default store;
