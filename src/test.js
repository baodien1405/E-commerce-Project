import firebase from "firebase/app";

import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("RVn72DuLoA4iS5Zm9anQ")
  .collection("cartItems")
  .doc("0xZkTlZaVRBNgfdvYr9b");
firestore.doc("users/RVn72DuLoA4iS5Zm9anQ/cartItems/0xZkTlZaVRBNgfdvYr9b");
firestore.collection("users/RVn72DuLoA4iS5Zm9anQ/cartItems");
