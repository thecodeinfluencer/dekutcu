import firebase from "../../data/firebaseConfig";

export const fetchCoreValues = () => {
  return (dispatch, getState) => {
    firebase
      .firestore()
      .collection("missionvision")
      .onSnapshot(function (snap) {
        const missionvision = [];
        snap.forEach((doc) => {
          missionvision.push(doc.data());
        });

        dispatch({ type: "FETCH_CORE_VALUES", missionvision });
      });
  };
};
