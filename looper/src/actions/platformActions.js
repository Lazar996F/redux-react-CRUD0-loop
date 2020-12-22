import {FETCH_PLATFORMS,SET_SELECTED_PLATFORM} from './types';
export const fetchPlatforms = () => dispatch => {
        fetch('http://localhost:3000/platforms')
        .then(res => res.json())
        .then(platforms =>
            dispatch({
            type:FETCH_PLATFORMS,
            payload: platforms
        })
    );
};

export const setSelectedPlatform = (platformId) => {
    return ({
    type:SET_SELECTED_PLATFORM,
    payload:platformId
})
}

