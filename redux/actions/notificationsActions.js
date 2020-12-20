import firebase from "../../data/firebaseConfig";

export const fetchNotifications = () => {
  return (dispatch, getState) => {
    firebase
      .firestore()
      .collection("notifications")
      .onSnapshot(function (snap) {
        const notifications = [];
        snap.forEach(doc => {
          notifications.push(doc.data());
        });

        dispatch({ type: "FETCH_NOTIFICATIONS", notifications });
      });
  };
};
