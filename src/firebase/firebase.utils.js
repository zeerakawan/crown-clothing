import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA9tmoRu6wQRCX2LvKgzcbyDLJOp2104nE",
    authDomain: "crown-db-27.firebaseapp.com",
    projectId: "crown-db-27",
    storageBucket: "crown-db-27.appspot.com",
    messagingSenderId: "1052837668305",
    appId: "1:1052837668305:web:50bf8479598c2aac13ecf0",
    measurementId: "G-N7902W9GP0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;