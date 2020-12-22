import {FETCH_PLATFORMS,SET_SELECTED_PLATFORM} from '../actions/types';
const initialState = {
    items: [],
    selectedPlatform:null
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_PLATFORMS:
            return {
                ...state,
                items:action.payload
            }
        case SET_SELECTED_PLATFORM:
            return {
                ...state,
                selectedPlatform:action.payload
            }
        default:
            return state;
    }
}