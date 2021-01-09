import firebase from 'firebase/app';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDbvkwNar5pCmBsUNVTYIe9f4FeAetaoAs",
    authDomain: "money-outlay.firebaseapp.com",
    projectId: "money-outlay",
    storageBucket: "money-outlay.appspot.com",
    messagingSenderId: "854369756550",
    appId: "1:854369756550:web:af9af2d025055b867af807",
    measurementId: "G-ESEFB21B83"
};

firebase.initializeApp(firebaseConfig);

export default firebase;