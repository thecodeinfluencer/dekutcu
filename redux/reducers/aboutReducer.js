import { store } from "../../data/database";
const initialState = store.about;

export default function aboutReducer(state = initialState, action) {
  switch (action.type) {
    case "STH":
      return { ...state };
    case "ANOTHER":
      return { ...state };
    default:
      return { ...state };
  }
}
