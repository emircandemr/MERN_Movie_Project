import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDU6A6yePlKPMnoC83490ZgCOewah8g0G8",
  authDomain: "mern-movie.firebaseapp.com",
  projectId: "mern-movie",
  storageBucket: "mern-movie.appspot.com",
  messagingSenderId: "802682383263",
  appId: "1:802682383263:web:8f3ad50c9118c9f8e3abaa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;