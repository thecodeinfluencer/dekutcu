import firebase from "../../data/firebaseConfig";

export const fetchAbout = () => {
  return (dispatch, getState) => {
    firebase
      .firestore()
      .collection("about")
      .onSnapshot(function (snap) {
        const aboutArr = [];

        snap.forEach((doc) => {
          aboutArr.push(doc.data());
        });

        let [about] = aboutArr;

        dispatch({ type: "FETCH_CORE_VALUES", about });
      });
  };
};
