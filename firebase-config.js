// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP31_K7V5AkZI5OYi7dp8UuhWdyS1c_wg",
  authDomain: "bridge-business-investors.firebaseapp.com",
  projectId: "bridge-business-investors",
  storageBucket: "bridge-business-investors.firebasestorage.app",
  messagingSenderId: "750288346006",
  appId: "1:750288346006:web:0c96226e39083766a39bb7",
  measurementId: "G-GSTFMPYH80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase app for use in other files
export { app, analytics };
