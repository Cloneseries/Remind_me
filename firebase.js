// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAIYkWxL5ilDdmcp4pk86yjSxUjQZ8VUjI",
    authDomain: "remind-me-1fb86.firebaseapp.com",
    databaseURL: "https://remind-me-1fb86.firebaseio.com",
    projectId: "remind-me-1fb86",
    storageBucket: "remind-me-1fb86.appspot.com",
    messagingSenderId: "728975268328",
    appId: "1:728975268328:web:8c5279e17715e46795ac5d",
    measurementId: "G-01FW350FG7"
});

const db = firebaseApp.firestore();
export default db;
