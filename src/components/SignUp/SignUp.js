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

const SignUp = () => {
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
        getValues,
        handleSubmit,
      } = useForm();

      const onSubmit = (data, e) => {
          if (data.email && data.password) {
            firebase
              .auth()
              .createUserWithEmailAndPassword(data.email, data.password)
              .then((res) => {
                const newUserInfo = { ...userInfo };
                newUserInfo.isSignIn = true;
                newUserInfo.displayName = data.name;
                newUserInfo.email = data.email;
                newUserInfo.password = data.password;
                SetUserInfo(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
                updateUserName(data.name)
              })
              .catch((error) => {
                alert(error.message)
              });
          }
        e.target.reset();
      };
      const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user
          .updateProfile({
            displayName: name
          })
          .then(function () {
            console.log('update user name successfully');
          })
          .catch(function (error) {
            console.log(error);
          });
      };

    return (
        <>
         <h3 className="fw-bold">Sign Up</h3>
         <form onSubmit={handleSubmit(onSubmit)}>
               <input
               placeholder="Full Name"
               type="text"
               {...register('name', {
                 required: 'Name is a required',
                 minLength: {
                   value: 4,
                   message: 'Name Must be 4 characters and more',
                 },
                 pattern:{
                   value:
                   /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                   message: "Name Contains Letter"
                 },
               })}
             />
           {errors.name && (
             <small style={{ color: "red" }}>{errors.name.message}</small>
           )}
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
             pattern: {
               value:
               /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
               message: `Minimum eight characters,one letter, one number`,
             },
            })}
           />
           {errors.password && (
             <small style={{ color: "red", textAlign:'center'}}>{errors.password.message}</small>
           )}
           
       <input
       placeholder="Confirm Password"
       type="password"
         {...register('passwordConfirmation',{
           required: 'Please confirm password!',
           validate: {
             matchesPreviousPassword: (value) => {
               const { password } = getValues();
               return password === value || 'Passwords should match!';
             },
           },
         })}
       />
       {errors.passwordConfirmation && (
         <small style={{ color: 'red' }}>
           {errors.passwordConfirmation.message}
         </small>
       )}
           <button type="submit">Sign Up</button>
         </form>
        </>
    );
};

export default SignUp;