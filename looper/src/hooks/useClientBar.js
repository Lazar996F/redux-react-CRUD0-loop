import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchScans } from "../actions/scanActions";
import { fetchPlatforms } from "../actions/platformActions";
import { fetchTerritories } from "../actions/territoriesActions";
import { fetchSpotStatistics } from "../actions/spotStatisticsActions";

export default function useClientBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchScans());
    dispatch(fetchPlatforms());
    dispatch(fetchTerritories());
  }, []);
  const scanId = useSelector((state) => state.scans.selectedScan);
  const platformId = useSelector((state) => state.platforms.selectedPlatform);
  const territoryId = useSelector(
    (state) => state.territories.selectedTerritory
  );
  const clientId = useSelector((state) => state.clientId.clientId);

  useEffect(() => {
    dispatch(fetchSpotStatistics());
  }, [scanId, platformId, territoryId, clientId]);
  const scans = useSelector((state) => state.scans.items);
  const platforms = useSelector((state) => state.platforms.items);
  const territories = useSelector((state) => state.territories.items);
  const statistics = useSelector((state) => state.statistics.items);
  return {
    scans,
    platforms,
    territories,
    statistics,
  };
}
