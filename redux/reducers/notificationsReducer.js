import { store } from "../../data/database";
const initialState = { list: store.notifications };

export default function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_NOTIFICATIONS":
      return { ...state, list: action.notifications };
    default:
      return { ...state };
  }
}
