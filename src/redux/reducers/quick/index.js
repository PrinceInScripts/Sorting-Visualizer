import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const currentQuickSlice = createSlice({
  name: 'currentQuick',
  initialState,
  reducers: {
    setCurrentQuick(state, action) {
      return action.payload;
    },
  },
});

export const { setCurrentQuick } = currentQuickSlice.actions;
export default currentQuickSlice.reducer;