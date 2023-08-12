import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBX_BvIzZsI4o36qxaT5Q_xdBnZC1ED4t0",
    authDomain: "clone-ce31e.firebaseapp.com",
    projectId: "clone-ce31e",
    storageBucket: "clone-ce31e.appspot.com",
    messagingSenderId: "237144127116",
    appId: "1:237144127116:web:93badd41c63a498e1a6da9",
    measurementId: "G-LN6Q3W6JMP"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };