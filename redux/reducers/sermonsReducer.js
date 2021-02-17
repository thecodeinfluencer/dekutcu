import { store } from "../../data/database";
const initialState = {
  list: [
    {
      author: "Papa Erastus",
      title: "The Grace",
      time: 1612435581852,
      url:
        "https://firebasestorage.googleapis.com/v0/b/dekutchristians.appspot.com/o/mbosso_picha_yake_official_music_video_mp3_37542.mp3?alt=media&token=a1db9b3d-2773-4c92-8cfd-f74e087fff75",
    },
    {
      author: "Dad Wesley",
      title: "Mounting Up",
      time: 1612435581852,
      url:
        "https://firebasestorage.googleapis.com/v0/b/dekutchristians.appspot.com/o/mbosso_picha_yake_official_music_video_mp3_37542.mp3?alt=media&token=a1db9b3d-2773-4c92-8cfd-f74e087fff75",
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
