import firebase from 'firebase/app'
import 'firebase/firestore'  

var firebaseConfig = {
    apiKey: "AIzaSyBJ_SITchg9i_wLrx4XSHx8i6QXcmDIDKU",
    authDomain: "looking-for-9da2d.firebaseapp.com",
    projectId: "looking-for-9da2d",
    storageBucket: "looking-for-9da2d.appspot.com",
    messagingSenderId: "288820812978",
    appId: "1:288820812978:web:1acd04573c4b5dab3fbdab"
  };

const fireb = firebase.initializeApp(firebaseConfig);
const stores = fireb.firestore();

export default stores;  
