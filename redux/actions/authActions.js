import firebase from "../../database/firebaseConfig";

const usersStore = firebase.firestore().collection("users");
usersStore.doc("works").set({ name: "Mark" });

export const connectWithGoogle = () => {
  return (dispatch, getstate) => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = JSON.parse(JSON.stringify(result.user));
        const userId = user.uid;

        usersStore
          .doc(userId)
          .set(user)
          .then(() => {
            dispatch({ type: "CREATE_USER", user });
          })
          .catch(err => {
            console.log("err", err);
            dispatch({ type: "CREATE_USER_ERR", err });
          });

        dispatch({ type: "SIGN_IN_USER", user });
      })
      .catch(err => dispatch({ type: "SIGN_IN_ERR", err }));
  };
};

export const connectWithFacebook = () => {
  return (dispatch, getstate) => {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;

        usersStore
          .doc(`${user.uid}`)
          .update({
            ...user,
          })
          .catch(err => dispatch({ type: "CREATE_USER_ERR", err }))
          .then(() => dispatch({ type: "CREATE_USER", user }));

        dispatch({ type: "SIGN_IN_USER", user });
      })
      .catch(err => dispatch({ type: "SIGN_IN_ERR", err }));
  };
};

export const signOut = () => {
  return (dispatch, getstate) => {
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: "SIGN_OUT" }))
      .catch(err => dispatch({ type: "SIGN_OUT_ERR", err }));
  };
};
