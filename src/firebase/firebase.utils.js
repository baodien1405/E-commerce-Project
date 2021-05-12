import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA9dIKHXWhvU6ajlKJvGW4q-1MkJt42Bcc",
  authDomain: "crwn-db-398af.firebaseapp.com",
  projectId: "crwn-db-398af",
  storageBucket: "crwn-db-398af.appspot.com",
  messagingSenderId: "140055325321",
  appId: "1:140055325321:web:1266f6d803b69e0636b458",
  measurementId: "G-KQL57MW0JS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoodle = () => auth.signInWithPopup(provider);

export default firebase;
