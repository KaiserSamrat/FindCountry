import { ActionTypes } from "../constants/action.js";
const intialState = {
    foods: [],
  };
export const foodReducer = (state = intialState, { type, payload }) =>
{
    switch (type) {
        case ActionTypes.SET_FOODS:
          return { ...state, foods: payload };
        default:
          return state;
      }
};
export const selectedFoodsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };