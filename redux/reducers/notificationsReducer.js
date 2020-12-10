import { store } from "../../data/database";
const initialState = store.notifications;

export default function notificatinsReducer(state = initialState, action) {
  switch (action.type) {
    case "STH":
      return [...state];
    case "ANOTHER":
      return [...state];
    default:
      return [...state];
  }
}
