import {FETCH_SPOT_STATISTICS} from '../actions/types'
const initialState = {
    items: [],
}
export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_SPOT_STATISTICS:
            return {
                ...state,
                items:action.payload
            }
        default:
            return state;
    }
}
