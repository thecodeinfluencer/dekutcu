import { store } from "../../data/database";
const initialState = store.ministryArray;

export default function ministryArrayReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_MUSIC_MINISTRY":
      console.log("ministries: ", action.ministries);
      return action.ministries;
    case "ANOTHER":
      return [...state];
    default:
      return [...state];
  }
}
