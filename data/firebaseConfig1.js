import "expo-firestore-offline-persistence";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //Your firebase configuration
  //Create a web project on firebase io
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

//Firebase Firestore Persistance
firebase
  .firestore()
  .enablePersistence()
  .catch(function (err) {
    if (err.code === "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
      console.log("Multiple tabs open, persistence can only be enabled");
    } else if (err.code === "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
      console.log("The current browser does not support ");
    }
  });

export default firebase;
