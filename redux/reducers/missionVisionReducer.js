import { store } from "../../data/database";
const initialState = store.missionVision;

export default function missionVisionReducer(state = initialState, action) {
  switch (action.type) {
    case "STH":
      return [...state];
    case "ANOTHER":
      return [...state];
    default:
      return [...state];
  }
}
