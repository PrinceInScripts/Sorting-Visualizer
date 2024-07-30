import { combineReducers } from '@reduxjs/toolkit';
import algorithmReducer from "./algorithm"

const rootReducer=combineReducers({
    algorithm: algorithmReducer
})


export default rootReducer;