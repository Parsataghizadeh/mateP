import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCfYolb4AHIBLvfSQ0orMUtA8KJu3alXok",
  authDomain: "mate-2a40c.firebaseapp.com",
  projectId: "mate-2a40c",
  storageBucket: "mate-2a40c.appspot.com",
  messagingSenderId: "874411811909",
  appId: "1:874411811909:web:ca7fad91367395f6fdef2c",
  measurementId: "G-HHZB215VYK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };