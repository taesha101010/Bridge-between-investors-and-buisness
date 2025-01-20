// Import necessary Firebase Authentication functions
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from './firebase-config'; // Import the initialized Firebase app

// Initialize Firebase Authentication
const auth = getAuth(app);

// Register new user
export const registerUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('User registered:', userCredential.user);
      window.location.href = 'dashboard.html'; // Redirect to dashboard
    })
    .catch((error) => {
      console.error('Error registering user:', error.message);
    });
};

// Login existing user
export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('User logged in:', userCredential.user);
      window.location.href = 'dashboard.html'; // Redirect to dashboard
    })
    .catch((error) => {
      console.error('Error logging in:', error.message);
    });
};

// Logout user
export const logoutUser = () => {
  signOut(auth)
    .then(() => {
      console.log('User logged out');
      window.location.href = 'index.html'; // Redirect to landing page
    })
    .catch((error) => {
      console.error('Error logging out:', error.message);
    });
};
