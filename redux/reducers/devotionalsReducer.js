import { store } from "../../data/database";
const initialState = { list: store.devotionals };

export default function devotionalsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DEVOTIONALS":
      return { ...state, list: action.devotionals };
    default:
      return { ...state };
  }
}
