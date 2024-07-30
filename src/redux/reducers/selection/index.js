import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const currentSelectionSlice = createSlice({
  name: 'currentSelection',
  initialState,
  reducers: {
    setCurrentSelection(state, action) {
      return action.payload;
    },
  },
});

export const { setCurrentSelection } = currentSelectionSlice.actions;
export default currentSelectionSlice.reducer;