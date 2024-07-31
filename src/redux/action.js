import { setArray } from "./reducers/array";
import { setRunning } from "./reducers/running";

export const runAlgorithm = (algorithm, array, speed) => async (dispatch) => {
  dispatch(setRunning(true));
  await algorithm(array, dispatch, speed);
  dispatch(setRunning(false));
};

export const generateArray = (size) => (dispatch) => {
  const array = Array.from(
    { length: size },
    () => Math.floor(Math.random() * 500) + 5
  );
  dispatch(setArray(array));
};
