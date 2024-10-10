// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGPLUvC0L2ur0wLufFjArqERjKpu5N8zI",
  authDomain: "enershas-webportal.firebaseapp.com",
  projectId: "enershas-webportal",
  storageBucket: "enershas-webportal.appspot.com",
  messagingSenderId: "291338774829",
  appId: "1:291338774829:web:4cb3bed89ffa7e3bd04ba4",
  measurementId: "G-XZWY504GFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Firebase Storage

// Export app, db, and storage
export { app, db, storage };
