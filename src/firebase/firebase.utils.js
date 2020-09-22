import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAdZG1SNo83UG7SRmSE6OvpeUbNqx8-K08",
    authDomain: "crwn-clothing-9929b.firebaseapp.com",
    databaseURL: "https://crwn-clothing-9929b.firebaseio.com",
    projectId: "crwn-clothing-9929b",
    storageBucket: "crwn-clothing-9929b.appspot.com",
    messagingSenderId: "213070042909",
    appId: "1:213070042909:web:9dc24337101dbe74ebf3f4",
    measurementId: "G-RJ92TG7EP2"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;