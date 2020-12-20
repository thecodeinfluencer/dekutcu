import firebase from "../../data/firebaseConfig";

export const fetchDevotionals = () => {
  return (dispatch, getState) => {
    firebase
      .firestore()
      .collection("devotionals")
      .onSnapshot(function (snap) {
        const devotionals = [];
        snap.forEach(doc => {
          devotionals.push(doc.data());
        });

        dispatch({ type: "FETCH_DEVOTIONALS", devotionals });
      });
  };
};
