// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwfDy438cibXF_WkcrZwn_GGETSdFsSQA",
  authDomain: "airbnb-clone-a98a4.firebaseapp.com",
  projectId: "airbnb-clone-a98a4",
  storageBucket: "airbnb-clone-a98a4.appspot.com",
  messagingSenderId: "171375323515",
  appId: "1:171375323515:web:94fd8ff83ab5836a5035de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;