import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "`${process.env.REACT_APP_FIREBASE_KEY}`",
  authDomain: "todo-list-react-9f2b9.firebaseapp.com",
  databaseURL: "https://todo-list-react-9f2b9.firebaseio.com",
  projectId: "todo-list-react-9f2b9",
  storageBucket: "todo-list-react-9f2b9.appspot.com",
  messagingSenderId: "1025603995150",
  appId: "1:1025603995150:web:cb456a490d1d3af9b01e5f",
  measurementId: "G-0Z2Q0ZX2XT"
});

// console.log(process.env)

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();


export default db;