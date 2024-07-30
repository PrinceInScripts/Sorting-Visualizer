import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const currentMergeXSlice = createSlice({
  name: 'currentMergeX',
  initialState,
  reducers: {
    setCurrentMergeX(state, action) {
      return action.payload;
    },
  },
});

export const { setCurrentMergeX } = currentMergeXSlice.actions;
export default currentMergeXSlice.reducer;