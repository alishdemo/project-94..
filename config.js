import firebase from "firebase"

const firebaseConfig={
    apiKey: "AIzaSyCfqHkNcf0PMeI3HgYMVG8TMbybMgVe4aU",
    authDomain: "feestructure-67b9e.firebaseapp.com",
    projectId: "feestructure-67b9e",
    storageBucket: "feestructure-67b9e.appspot.com",
    messagingSenderId: "657863380060",
    appId: "1:657863380060:web:ff3bc1a257145670042a99"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();