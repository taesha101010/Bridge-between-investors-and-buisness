// Import necessary functions from Firebase Authentication
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from './firebase-config'; // Import initialized Firebase app
import { logoutUser } from './auth'; // Import the logout function from auth.js

// Initialize Firebase Authentication
const auth = getAuth(app);

// Check user status and redirect accordingly
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is logged in:', user.email);
    // You can redirect based on the user role (example below)
    // Here you would add logic for role management:
    // if (user.email.endsWith('@business.com')) { window.location.href = 'business-dashboard.html'; }
    document.getElementById("role-specific-content").innerHTML = `
      <h2>Welcome ${user.email}</h2>
      <p>You can access the dashboard based on your role.</p>
    `;
  } else {
    console.log('No user is logged in');
    window.location.href = "login.html"; // Redirect to login if no user is logged in
  }
});

// Logout user on button click
document.getElementById("logout-button").addEventListener("click", () => {
  logoutUser();
});
