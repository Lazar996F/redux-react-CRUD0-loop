import {FETCH_SCANS,SET_SELECTED_SCAN} from '../actions/types'
const initialState = {
    items: [],
    selectedScan:null,
}
export default function(state = initialState, action) {

    switch(action.type){
        case FETCH_SCANS:
            return {
                ...state,
                items:action.payload
            }
        case SET_SELECTED_SCAN:
            return {
                ...state,
                selectedScan:action.payload
            }
        default:
            return state;
    }
}