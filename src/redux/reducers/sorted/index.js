import { createSlice } from "@reduxjs/toolkit";


const initialState=[];

const currentSortedSlice=createSlice({
    name:'currentSorted',
    initialState,
    reducers:{
        setCurrentSorted(state,action){
            if(action.payload.length){
                return state.concat(action.payload);
            } else{
                return [];
            }
        }
    }
})


export const {setCurrentSorted}=currentSortedSlice.actions;

export default currentSortedSlice.reducer;
