import { createSlice } from "@reduxjs/toolkit";


const initialState='';

const algorithmSlice=createSlice({
    name:'algorithm',
    initialState,
    reducers:{
        setAlgorithm(state,action){
               return action.payload;
        }
    }
})

export const {setAlgorithm} =algorithmSlice.actions;

export default algorithmSlice.reducer;