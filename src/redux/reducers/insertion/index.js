import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const currentInsertionSlice = createSlice({
  name: 'currentInsertionSort',
  initialState,
  reducers: {
    setCurrentInsertion(state, action) {
      return action.payload;
    },
  },
});

export const { setCurrentInsertion } = currentInsertionSlice.actions;
export default currentInsertionSlice.reducer;