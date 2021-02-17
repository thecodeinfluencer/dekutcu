import firebase from "../../data/firebaseConfig";

export const fetchCoreValues = () => {
  return (dispatch, getState) => {
    firebase
      .firestore()
      .collection("corevalues")
      .onSnapshot(function (snap) {
        const corevalues = [];
        snap.forEach((doc) => {
          corevalues.push(doc.data());
        });

        dispatch({ type: "FETCH_CORE_VALUES", corevalues });
      });
  };
};
