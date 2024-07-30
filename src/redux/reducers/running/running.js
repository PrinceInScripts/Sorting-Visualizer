import { createSlice } from "@reduxjs/toolkit";



const initialState='';

const isRunningSlice=createSlice({
    name:'isRunning',
    initialState,
    reducers:{
        setRunning(state,action){
            return action.payload;
        }
    }
})


export const {setRunning} = isRunningSlice.actions;

export default isRunningSlice.reducer