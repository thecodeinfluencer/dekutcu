import { store } from "../../data/database";
const initialState = {
  list: store.sermons,
};

export default function sermonsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_SERMONS":
      return { ...state, list: action.sermons };
    default:
      return { ...state };
  }
}
