// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM2t2_gkpMPAQiZZRPX8uDHQ8IkMU-Yt4",
  authDomain: "keesapp-8247a.firebaseapp.com",
  projectId: "keesapp-8247a",
  storageBucket: "keesapp-8247a.appspot.com",
  messagingSenderId: "483114457566",
  appId: "1:483114457566:web:a09fb5927e671469aa654f",
  measurementId: "G-CFN1ZKDN4L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)  