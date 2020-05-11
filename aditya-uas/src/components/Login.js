import React, { useState, useContext } from "react";
import { AuthContext } from "../index";
import * as firebase from "firebase";
import "./file.css"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = e => {
    e.preventDefault();
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
            if(res.user) Auth.setLoggedin(true);
        })
        .catch(e => {
            setError(e.message);
        })
  };

  const googleJoin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        if (res.credential) Auth.setLoggedin(true);
      });
  };

  return (
    <div id="login">
      <h3 class="text-center text-white pt-5">Login form</h3>
      <div class="container">
        <div id="login-row" class="row justify-content-center align-items-center">
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <form id="login-form" class="form" action="" method="post" onSubmit={e => handleForm(e)}>
                <h3 class="text-center text-info">Login</h3>
                <div class="form-group">
                <input value={email} onChange={e => setEmail(e.target.value)} name="email" type="email" placeholder="email" class="form-control"/>
                </div>
                <div class="form-group">
                <input onChange={e => setPassword(e.target.value)} name="password" value={password} type="password" placeholder="password" class="form-control"/>
                </div>

                <hr />
                <button class="googleBtn" type="button" onClick ={()=> googleJoin()}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="logo"
                />
                  Login With Google
                </button >
                <button type="submit" >Login</button>
                <span>{error}</span>
                
                <div id="register-link" class="text-right">
                <a href="#" class="text-info">Register here</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div > 


  );
};

export default Login;