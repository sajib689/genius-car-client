// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAssMOGv-mwivqA3HzgTFTRniXEePHwQu8",
  authDomain: "genius-car-client-551da.firebaseapp.com",
  projectId: "genius-car-client-551da",
  storageBucket: "genius-car-client-551da.appspot.com",
  messagingSenderId: "905246437915",
  appId: "1:905246437915:web:f930297fccbbd7c45efebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app