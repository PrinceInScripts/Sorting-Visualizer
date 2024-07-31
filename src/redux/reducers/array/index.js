import { createSlice } from "@reduxjs/toolkit";


const initialState='';

const arraySlice=createSlice({
    name:'array',
    initialState,
    reducers:{
        setArray(state,action){
            return action.payload;
        }
    }
})

export const {setArray}=arraySlice.actions;

export default arraySlice.reducer