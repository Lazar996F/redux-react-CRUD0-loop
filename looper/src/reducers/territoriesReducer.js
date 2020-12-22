import {FETCH_TERRITORIES, SET_SELECTED_TERRITORY} from '../actions/types'
const initialState = {
    items: [],
    selectedTerritory:null
}
export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_TERRITORIES:
            return {
                ...state,
                items:action.payload
            }
        case SET_SELECTED_TERRITORY:
            return {
                ...state,
                selectedTerritory:action.payload
            }
        default:
            return state;
    }
}