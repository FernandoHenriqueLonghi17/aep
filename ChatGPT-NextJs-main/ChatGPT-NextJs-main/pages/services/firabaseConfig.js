
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt__SkapImKwCIAPHMFxUQGF7wdDsWGXE",
  authDomain: "chatgpt-validacao.firebaseapp.com",
  projectId: "chatgpt-validacao",
  storageBucket: "chatgpt-validacao.appspot.com",
  messagingSenderId: "1024064367277",
  appId: "1:1024064367277:web:5d8c90731f7128faf4b424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
