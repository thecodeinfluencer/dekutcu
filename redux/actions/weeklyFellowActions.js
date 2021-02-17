import firebase from "../../data/firebaseConfig";

export const fetchCoreValues = () => {
  return (dispatch, getState) => {
    firebase
      .firestore()
      .collection("weeklyfellow")
      .onSnapshot(function (snap) {
        const weeklyfellow = [];
        snap.forEach((doc) => {
          weeklyfellow.push(doc.data());
        });

        dispatch({ type: "FETCH_CORE_VALUES", weeklyfellow });
      });
  };
};
