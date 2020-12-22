import { FETCH_SCANS, SET_SELECTED_SCAN } from "./types";
export const fetchScans = () => (dispatch) => {
  fetch("http://localhost:3000/scans")
    .then((res) => res.json())
    .then((scans) =>
      dispatch({
        type: FETCH_SCANS,
        payload: scans,
      })
    );
};

export const setSelectedScan = (scanId) => {
  return {
    type: SET_SELECTED_SCAN,
    payload: scanId,
  };
};
