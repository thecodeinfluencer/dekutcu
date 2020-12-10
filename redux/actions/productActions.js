import firebase from "../../database/firebaseConfig";

let currentUser = firebase.auth().currentUser;
const productsDB = firebase.firestore().collection("products");
const usersDB = firebase.firestore().collection("users");

export const createProduct = product => {
  return (dispatch, getstate) => {
    let images = product.images;
    let imageDownloadUrls = [];
    let timeId = Date.now();
    let productSearchString = JSON.stringify(product).toLocaleLowerCase();

    images.forEach(image => {
      const productsStorageRef = firebase
        .storage()
        .ref(
          `/products/${currentUser?.uid}/${
            Date.now() + Math.random() * 10000
          }.jpg`
        );

      productsStorageRef
        .put(image)
        .then(img => {
          img.ref.getDownloadURL().then(url => {
            imageDownloadUrls.push(url);

            console.log("url: ", imageDownloadUrls);
            console.log("currentUser: ", currentUser);
            currentUser &&
              productsDB
                .doc(`${timeId}`)
                .set({
                  ...product,
                  time: timeId,
                  seller: currentUser?.uid,
                  views: 0,
                  images: imageDownloadUrls,
                  search: productSearchString,
                })
                .catch(err => dispatch({ type: "CREATE_PRODUCT_ERR", err }))
                .then(() => dispatch({ type: "CREATE_PRODUCT", url }));
          });
        })
        .catch(err => {
          dispatch({ type: "CREATE_PRODUCT_ERR", err });
        });
    });
  };
};

export const updateNumberOfViews = productTime => {
  return (dispatch, getState) => {
    var sfDocRef = firebase
      .firestore()
      .collection("products")
      .doc(productTime.toString());

    // Uncomment to initialize the doc.
    // sfDocRef.set({ population: 0 });

    firebase
      .firestore()
      .runTransaction(async transaction => {
        const sfDoc = await transaction.get(sfDocRef);
        if (!sfDoc.exists) {
          console.log("Document does not exist!");
        }
        var newViews = sfDoc.data().views + 1;
        transaction.update(sfDocRef, { views: newViews });
      })
      .then(e => {
        console.log("Transaction successfully committed!");
        dispatch({ type: "UPDATE_PRODUCT_VIEWS", e });
      })
      .catch(err => {
        console.log("Transaction failed: ", err);
        dispatch({ type: "UPDATE_PRODUCT_VIEWS", err });
      });
  };
};

export const fetchProducts = () => {
  return (dispatch, getState) => {
    productsDB.onSnapshot(function (snap) {
      const products = [];

      snap.forEach(doc => {
        products.push(doc.data());
      });

      dispatch({ type: "FETCH_PRODUCT", products });
    });
  };
};

export const fetchProductSeller = sellerID => {
  return (dispatch, getState) => {
    usersDB
      .doc(`${sellerID}`)
      .get()
      .then(snap => {
        let userData = snap.data();
        dispatch({ type: "FETCH_USER_DATA", userData });
      })
      .catch(err => {
        dispatch({ type: "FETCH_USER_DATA_ERR", err });
      });
  };
};
