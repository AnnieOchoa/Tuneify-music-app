// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALZk101Z8GXw3ZDtyoWiYK-xpa_sNPkb4",
  authDomain: "music-app-react-c6cd3.firebaseapp.com",
  projectId: "music-app-react-c6cd3",
  storageBucket: "music-app-react-c6cd3.appspot.com",
  messagingSenderId: "28537267483",
  appId: "1:28537267483:web:c7c261bffb464d2acbdfbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;