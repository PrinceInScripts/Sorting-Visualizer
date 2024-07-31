import { createSelector } from 'reselect';

const selectArray = (state) => state.array;
const selectRunning = (state) => state.running;
const selectAlgorithm = (state) => state.toolbar.algorithm;
const selectSpeed = (state) => state.toolbar.speed;

// Memoized selector
export const getArrayData = createSelector(
  [selectArray, selectRunning, selectAlgorithm, selectSpeed],
  (array, running, algorithm, speed) => ({
    array,
    running,
    algorithm,
    speed
  })
);