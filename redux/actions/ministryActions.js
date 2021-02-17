import firebase from "../../data/firebaseConfig";

export const fetchCoreValues = () => {
  return (dispatch, getState) => {
    firebase
      .firestore()
      .collection("ministries")
      .onSnapshot(function (snap) {
        const ministries = [];
        snap.forEach((doc) => {
          ministries.push(doc.data());
        });

        dispatch({ type: "FETCH_CORE_VALUES", ministries });
      });
  };
};
