import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ-bVAOqmRTiPwhrnV9xD7YYTOIHS7f5s",
  authDomain: "yt-clone-avinash.firebaseapp.com",
  projectId: "yt-clone-avinash",
  storageBucket: "yt-clone-avinash.appspot.com",
  messagingSenderId: "73745248181",
  appId: "1:73745248181:web:bab67e1ee21ec4d36873fc",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
