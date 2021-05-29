import {ActionTypes} from "../constants/action"
export const setFoods = (foods) =>{
return {
    type: ActionTypes.SET_FOODS,
    payload: foods,
}

}
export const selectFood = (food) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: foods,
    }
    
    }