import { combineReducers } from "redux";
import { countryReducer, selectedCountryReducer } from "./countryReducer";
const reducers = combineReducers({
    allCountries: countryReducer,
    countries: selectedCountryReducer,
  });

  export default reducers;