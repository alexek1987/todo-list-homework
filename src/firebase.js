import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "`${process.env.REACT_APP_FIREBASE_KEY}`",
    authDomain: "todoapp-5340e.firebaseapp.com",
    projectId: "todoapp-5340e",
    storageBucket: "todoapp-5340e.appspot.com",
    messagingSenderId: "151555746690",
    appId: "1:151555746690:web:c1b118495dad79e340bd9b"
});

// console.log(process.env)

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();


export default db;



