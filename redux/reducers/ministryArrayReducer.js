import { store } from "../../data/database";
const initialState = store.ministryArray;

export default function ministryArrayReducer(state = initialState, action) {
  switch (action.type) {
    case "STH":
      return [...state];
    case "ANOTHER":
      return [...state];
    default:
      return [...state];
  }
}
