import { combineReducers } from "redux";
import { countryReducer, selectedFoodsReducer } from "./countryReducer";
const reducers = combineReducers({
    allCountries: countryReducer,
    countries: selectedFoodsReducer,
  });

  export default reducers;