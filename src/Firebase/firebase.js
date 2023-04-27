import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyAak71gInHjSkb2Br3-P0BOkO2U1EkwHUU",
  authDomain: "project-34093.firebaseapp.com",
  projectId: "project-34093",
  storageBucket: "project-34093.appspot.com",
  messagingSenderId: "105583004621",
  appId: "1:105583004621:web:6f9f1ea6ae6f77feab9284",
  measurementId: "G-T56P616YMF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);