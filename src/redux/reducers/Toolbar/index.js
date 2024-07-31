import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    algorithm: 'bubbleSort',
    speed: 50,
};

const toolbarSlice = createSlice({
    name: 'toolbar',
    initialState,
    reducers: {
        setAlgorithm: (state, action) => {
            state.algorithm = action.payload;
        },
        setSpeed: (state, action) => {
            state.speed = action.payload;
        },
        setSize: (state, action) => {
            state.speed = action.payload;
        },
        
    },
});

export const { setAlgorithm, setSpeed ,setSize} = toolbarSlice.actions;
export default toolbarSlice.reducer;