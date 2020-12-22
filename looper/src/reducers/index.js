import { combineReducers } from "redux";
import scanReducer from "./scanReducer";
import platformReducer from "./platformReducer";
import territoriesReducer from "./territoriesReducer";
import spotStatisticsReducer from "./spotStatisticsReducer";
import clientReducer from "./clientReducer";

export default combineReducers({
  scans: scanReducer,
  platforms: platformReducer,
  territories: territoriesReducer,
  statistics: spotStatisticsReducer,
  clientId: clientReducer,
});
