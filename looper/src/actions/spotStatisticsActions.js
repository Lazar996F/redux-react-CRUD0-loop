import { FETCH_SPOT_STATISTICS } from "./types";

export const fetchSpotStatistics = () => (dispatch, getState) => {
  const state = getState();
  const scanId = state.scans.selectedScan;
  const platformId = state.platforms.selectedPlatform;
  const territoryId = state.territories.selectedTerritory;
  const clientID = state.clientId.clientId;
  let url = "http://localhost:3000/spot_statistics";
  const qs = {};
  if (scanId) qs.scan_id = scanId;
  if (platformId) qs.platform_id = platformId;
  if (territoryId) qs.territory_id = territoryId;
  if (clientID) qs.client_id = clientID;

  const params = new URLSearchParams(qs);
  fetch(url + "?" + params.toString())
    .then((res) => res.json())
    .then((statistics) =>
      dispatch({
        type: FETCH_SPOT_STATISTICS,
        payload: statistics,
      })
    );
};
