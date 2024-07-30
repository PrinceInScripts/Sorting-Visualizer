import { combineReducers } from '@reduxjs/toolkit';
import algorithm from './algorithm';
import array from './array';
import swappers from './swappers';
import sorted from './sorted';
import running from './running/running';
import selection from './selection';
import quick from './quick';
import pivot from './pivot';
import merge from './merge';
import insertion from './insertion';
import heap from './heap';
import bubble from './bubble';

const rootReducer=combineReducers({
    algorithm,
    array,
    swappers,
    sorted,
    running,
    selection,
    quick,
    pivot,
    merge,
    insertion,
    heap,
    bubble
})


export default rootReducer;