import { combineReducers } from "redux";

import coreValuesReducer from "./coreValuesReducer";
import aboutReducer from "./aboutReducer";
import missionVisionReducer from "./missionVisionReducer";
import weeklyFellowReducer from "./weeklyFellowReducer";
import ministryArrayReducer from "./ministryArrayReducer";
import notificationsReducer from "./notificationsReducer";
import devotionalsReducer from "./devotionalsReducer";

const rootReducer = combineReducers({
  coreValues: coreValuesReducer,
  weeklyFellow: weeklyFellowReducer,
  about: aboutReducer,
  missionVision: missionVisionReducer,
  ministryArray: ministryArrayReducer,
  notifications: notificationsReducer,
  devotionals: devotionalsReducer,
});

export default rootReducer;
