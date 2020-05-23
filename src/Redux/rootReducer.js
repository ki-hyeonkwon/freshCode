import { combineReducers } from "redux";
import getData from "Redux/Reducers/getData";
import getCategory from "Redux/Reducers/getCategory";
import controlModal from "Redux/Reducers/controlModal";
import getPlaceholderTxt from "Redux/Reducers/getPlaceholderTxt";

const rootReducer = combineReducers({
  getData,
  getCategory,
  controlModal,
  getPlaceholderTxt,
});

export default rootReducer;
