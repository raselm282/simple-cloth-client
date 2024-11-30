// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjtQ5Y_syDY9RrtU_a5CPRQVx-k7yJ9Xg",
  authDomain: "simple-cloth-client.firebaseapp.com",
  projectId: "simple-cloth-client",
  storageBucket: "simple-cloth-client.firebasestorage.app",
  messagingSenderId: "116466106769",
  appId: "1:116466106769:web:022771a48d937522625a30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);