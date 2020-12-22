import {FETCH_TERRITORIES,SET_SELECTED_TERRITORY} from './types';
export const fetchTerritories = () => dispatch => {
        fetch('http://localhost:3000/territories')
        .then(res => res.json())
        .then(territories =>
            dispatch({
            type:FETCH_TERRITORIES,
            payload: territories
        })
    );
};

export const setSelectedTerritory= (territoryId) => {
    return ({
            type:SET_SELECTED_TERRITORY,
            payload:territoryId
    })
};
