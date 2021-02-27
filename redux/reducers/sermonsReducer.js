import { store } from "../../data/database";
const initialState = {
  list: [
    {
      author: "Papa Erastus",
      title: "The Grace",
      time: 1612435581852,
      url:
        "https://firebasestorage.googleapis.com/v0/b/dekutchristians.appspot.com/o/Sam%20Oladotun%20-%20You%20Are%20Yahweh%20(Worship%20Medley)(MP3_70K)_1.mp3?alt=media&token=b37d31d5-fa3b-4402-8919-13b81d42541d",
    },
    {
      author: "Dad Wesley",
      title: "Mounting Up",
      time: 1612435581852,
      url:
        "https://firebasestorage.googleapis.com/v0/b/dekutchristians.appspot.com/o/Sam%20Oladotun%20-%20You%20Are%20Yahweh%20(Worship%20Medley)(MP3_70K)_1.mp3?alt=media&token=b37d31d5-fa3b-4402-8919-13b81d42541d",
    },
  ],
};

export default function sermonsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_SERMONS":
      return { ...state, list: action.sermons };
    default:
      return { ...state };
  }
}
