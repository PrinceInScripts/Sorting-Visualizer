import { createSlice } from "@reduxjs/toolkit";


const initialState=[];

const currentSwapperSlice=createSlice({
    name:'currentSwappers',
    initialState,
    reducers:{
        setCurrentSwapper(state,action){
            if(action.payload.length){
                return state.concat(action.payload);
            } else{
                return [];
            }
        }
    }
})


export const {setCurrentSwapper}=currentSwapperSlice.actions;

export default currentSwapperSlice.reducer;
