import { combineReducers } from "redux";
import { foodReducer, selectedFoodsReducer } from "./foodReducer";
const reducers = combineReducers({
    allFoods: foodReducer,
    food: selectedFoodsReducer,
  });

  export default reducers;