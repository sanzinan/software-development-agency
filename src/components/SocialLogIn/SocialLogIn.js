import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig"

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const SocialLogIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
   
  const [userInfo, SetUserInfo] = useState({
        isSignIn: false,
        displayName: '',
        email:'',
        photoURL:''
    })

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const { displayName, email, photoURL } = user;
                const userSignIn = {
                  displayName: displayName,
                  photoURL: photoURL,
                    email: email,
                    isSignIn: true
                };
        SetUserInfo(userSignIn)
        setLoggedInUser(userSignIn)
        history.replace(from)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage)
      });
  };
  
  const handleGitHubSignIn = () => {
   const provider = new firebase.auth.GithubAuthProvider();
    firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
        const user = result.user
        const { displayName, email, photoURL } = user;
                const userSignIn = {
                  displayName: displayName,
                  photoURL: photoURL,
                    email: email,
                    isSignIn: true
                };
        SetUserInfo(userSignIn)
        setLoggedInUser(userSignIn)
        history.replace(from)
    }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage)
    })
  }

  return (
    <div className="pt-3 d-flex justify-content-center align-items-center flex-column">
      <strong className="pb-3">Sign in with social network</strong>
      <button onClick={handleGoogleSignIn} className="social-signin google">
        Log in with Google
      </button>
      <button onClick={handleGitHubSignIn} className="social-signin github">Log in with GitHub</button>
    </div>
  );
};

export default SocialLogIn;