import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const currentBubbleSlice = createSlice({
  name: 'currentBubble',
  initialState,
  reducers: {
    setCurrentBubble(state, action) {
      return action.payload;
    },
  },
});

export const { setCurrentBubble } = currentBubbleSlice.actions;
export default currentBubbleSlice.reducer;