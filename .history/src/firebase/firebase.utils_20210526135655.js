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

export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoodle = () => auth.signInWithPopup(provider);

export default firebase;
