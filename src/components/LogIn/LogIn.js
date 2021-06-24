import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig/FirebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const LogIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [userInfo, SetUserInfo] = useState({
    isSignIn: false,
    displayName: '',
    email:'',
    password: ''
})
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const onSubmit = (data, e) => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
       .then((user) => {
        const newUserInfo = { ...userInfo };
        newUserInfo.isSignIn = true;
        newUserInfo.email = data.email;
        newUserInfo.password = data.password;
        SetUserInfo(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  });
        e.target.reset();
      };
    return (
        <>
        <h3 className="fw-bold">Log In</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Email"
            type="text"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <small style={{ color: "red" }}>{errors.email.message}</small>
          )}
          <input
            placeholder="Password"
            type="password"
            {...register("password", { required: "Password is required!" ,
            // pattern: {
            //   value:
            //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            //   message: `Minimum eight characters,one letter, one number`,
            // },
           })}
          />
          {errors.password && (
            <small style={{ color: "red", textAlign:'center'}}>{errors.password.message}</small>
          )}
          <button type="submit">Log In</button>
        </form>
       </>
    );
};

export default LogIn;