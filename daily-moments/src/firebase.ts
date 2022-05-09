import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBzqasuXDplotw_WeWiXjqScd8WA8TotOE",
    authDomain: "daily-moments-1fca9.firebaseapp.com",
    projectId: "daily-moments-1fca9",
    storageBucket: "daily-moments-1fca9.appspot.com",
    messagingSenderId: "457118792830",
    appId: "1:457118792830:web:590faf0db2907d9444ec2f"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const auth = app.auth();
  export const firestore = app.firestore();
  export const storage = app.storage();