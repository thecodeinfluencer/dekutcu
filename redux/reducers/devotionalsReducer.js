import { store } from "../../data/database";
const initialState = store.devotionals;

export default function devotionalsReducer(state = initialState, action) {
  switch (action.type) {
    case "STH":
      return [...state];
    case "ANOTHER":
      return [...state];
    default:
      return [...state];
  }
}
