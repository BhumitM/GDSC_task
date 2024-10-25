import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe4EzYofA1KtkFSxnvqVm7rYE5QDO5X9w",
    authDomain: "gdsc-project-6dc3f.firebaseapp.com",
    databaseURL: "https://gdsc-project-6dc3f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gdsc-project-6dc3f",
    storageBucket: "gdsc-project-6dc3f.appspot.com",
    messagingSenderId: "213799442046",
    appId: "1:213799442046:web:929ad368432529d0f76a2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Signup function
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase Auth - Create User
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            
            // Store additional user data in Firebase Realtime Database
            set(ref(database, 'users/' + user.uid), {
                username: username,
                email: email
            })
            .then(() => {
                alert("Signup successful!");
                window.location.href = "index.html"; // Redirect to login page
            })
            .catch((error) => {
                alert("Error saving user data: " + error.message);
            });
        })
        .catch((error) => {
            alert("Error signing up: " + error.message);
        });
});