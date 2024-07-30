import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const pivotSlice = createSlice({
  name: 'pivot',
  initialState,
  reducers: {
    setPivot(state, action) {
      return action.payload;
    },
  },
});

export const { setPivot } = pivotSlice.actions;
export default pivotSlice.reducer;