import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADn5dUgrnGPI99elYOzOoydwgK8Fgk30o",
    authDomain: "takshshila-32614.firebaseapp.com",
    projectId: "takshshila-32614",
    storageBucket: "takshshila-32614.appspot.com",
    messagingSenderId: "607008786370",
    appId: "1:607008786370:web:a224ece58d43d5b794b85b",
    measurementId: "G-0WF23ZJ2CM",
};
firebase.initializeApp(firebaseConfig);
export default firebase;