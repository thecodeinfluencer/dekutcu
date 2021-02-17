import firebase from "../../data/firebaseConfig";

export const fetchSermons = () => {
  return (dispatch, getState) => {
    firebase
      .firestore()
      .collection("sermons")
      .onSnapshot(function (snap) {
        const sermons = [];
        snap.forEach((doc) => {
          sermons.push(doc.data());
        });

        dispatch({ type: "FETCH_SERMONS", sermons });
      });
  };
};
