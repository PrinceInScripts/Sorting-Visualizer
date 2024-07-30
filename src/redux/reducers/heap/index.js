import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const currentHeapSlice = createSlice({
  name: 'currentHeap',
  initialState,
  reducers: {
    setCurrentHeap(state, action) {
      return action.payload;
    },
  },
});

export const { setCurrentHeap } = currentHeapSlice.actions;
export default currentHeapSlice.reducer;