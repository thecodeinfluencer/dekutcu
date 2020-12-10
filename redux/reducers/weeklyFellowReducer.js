import { store } from "../../data/database";
const initialState = store.weeklyFellow;

export default function weeklyFellowReducer(state = initialState, action) {
  switch (action.type) {
    case "STH":
      return [...state];
    case "ANOTHER":
      return [...state];
    default:
      return [...state];
  }
}
