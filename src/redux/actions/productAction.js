import {ActionTypes} from "../constants/action"
export const setCountries = (countries) =>{
return {
    type: ActionTypes.SET_COUNTRIES ,
    payload: countries,
}

}
export const selectCountry = (country) =>{
    return {
        type: ActionTypes.SELECTED_COUNTRIES,
        payload: country,
    }
    
    }