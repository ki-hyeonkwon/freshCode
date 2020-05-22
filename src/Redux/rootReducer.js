import { combineReducers } from "redux";
import getData from "Redux/Reducers/getData";
import getCategory from "Redux/Reducers/getCategory";

const rootReducer = combineReducers({ getData, getCategory });

export default rootReducer;
