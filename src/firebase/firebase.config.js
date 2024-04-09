// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSSY72Oawvs9Qi8JIVd2EpjqxD9DQFH6k",
  authDomain: "salon-management-booking-app.firebaseapp.com",
  projectId: "salon-management-booking-app",
  storageBucket: "salon-management-booking-app.appspot.com",
  messagingSenderId: "885463209129",
  appId: "1:885463209129:web:dba7d42d682bf9ed8a85b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
