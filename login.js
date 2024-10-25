import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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
const auth = getAuth(app);

// Login function
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Show modal on successful login
            document.getElementById('modal').style.display = 'flex';

            // Redirect after 2 seconds
            setTimeout(() => {
                document.getElementById('modal').style.display = 'none';
                window.location.href = "dashboard.html"; // Redirect to the desired page
            }, 2000);
        })
        .catch((error) => {
            alert("Login failed: " + error.message);
        });
});