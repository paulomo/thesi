// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACx420Ut154f7IntI1b0CBjbNBw9-zjh0",
  authDomain: "instagramcopy-cf410.firebaseapp.com",
  projectId: "instagramcopy-cf410",
  storageBucket: "instagramcopy-cf410.appspot.com",
  messagingSenderId: "787576431616",
  appId: "1:787576431616:web:ffb393cc2c652a6662a4e5",
  measurementId: "G-W7KEQ1X9GE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();
