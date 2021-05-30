import { ActionTypes } from "../constants/action.js";
const intialState = {
    countries: [],
  };
export const countryReducer = (state = intialState, { type, payload }) =>
{
    switch (type) {
        case ActionTypes.SET_COUNTRIES:
          return { ...state, countries: payload };
        default:
          return state;
      }
};
export const selectedFoodsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED_COUNTRIES:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };