import { createSlice } from "@reduxjs/toolkit";


const initialState='';

const arraySlice=createSlice({
    name:'array',
    initialState,
    reducers:{
        setArray(state,action){
            return payload.action;
        }
    }
})

export const {setArray}=arraySlice.actions;

export default arraySlice.reducer