import React from "react";
import Images from "./assets/images/images";
import { Link } from "react-router-dom";
import "./Login.css";

// for Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { getAuth ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCT7v_NAYEVXjB3TgbRjGO5IuMn-8G3CEE",
    authDomain: "hashdefine-50e36.firebaseapp.com",
    databaseURL:
      "https://hashdefine-50e36-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hashdefine-50e36",
    storageBucket: "hashdefine-50e36.appspot.com",
    messagingSenderId: "51576220241",
    appId: "1:51576220241:web:5257e7c453641128c62670",
}; 


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

class Register extends React.Component {
    validateForm = () => {
          var email=document.getElementById('email').value;
          var password=document.getElementById('pass').value;
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          window.open("/")
          // ...
          })
          .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    };

    componentDidMount() {
        document.getElementById("btn").addEventListener("click", (e) => {
            this.validateForm();
        });
    }
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <img className="logo" src={Images.ethereumIcon} alt="ethereum Icon" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#">Certification</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <Link to="/login">
            <img className="user" src={Images.userIcon} alt="user Icon" />
          </Link>
        </div>
        <div className="container2">
          <h1>Sign In</h1>
          <div className="form">
            <form>
              <input id="email" type="email" placeholder="Email" required />
              <input
                id="pass"
                type="password"
                placeholder="Password"
                required
              />
              <input id="btn" type="button" value="Sign In" />
              <input type="checkbox" />
              <label>Remember Me</label>
            </form>
          </div>
          <div className="new_user">
            <p id="para">
              New To HashDefine?{" "}
              <Link
                style={{color:"red", cursor:"pointer"}}
                className="sign-up"
                to="/signup"
              >
                Sign Up
              </Link>
              Now!
            </p>
          </div>
        </div>
        {/* <!-- Script For Firebase Module --> */}
        {/* <script type="module" src="./register_auth.js"></script> */}
      </div>
    );
  }
}
export default Register;
