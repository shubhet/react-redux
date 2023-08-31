//root reducer
//merge all reducer here
//to make single store

import {combineReducers} from 'redux';
import cardItems from "./reducer";

export default combineReducers({
    cardItems,
});