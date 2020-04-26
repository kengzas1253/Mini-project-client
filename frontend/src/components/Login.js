import React, { useState } from 'react';
import auth from '../firebase';
import './Login.css';


const Login =({ setSession })=>{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      if(username=="admin1234@gmail.com"){
           const response = await auth.signInWithEmailAndPassword(
        username,
        password
      );

      const { user } = response;

      setSession({
        isLoggedIn: true,
        currentUser: user
      });
      }
   
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.message
      });
    }
  };

  const handleRegister = async () => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        username,
        password
      );

      const { user } = response;

      setSession({
        isLoggedIn: true,
        currentUser: user
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.essage
      });
    }
  };

  return (
    
    <div class="wrapper">
    <div class="form-signin">
    <h2 class="form-signin-heading">Please Admin login</h2>
    {/* <p1>{username} {password}</p1> */}
    <input type="text" class="form-control" name="username" 
    placeholder="Email Address" 
    onChange={(e) =>setUsername(e.target.value)}
    />
    <input type="password" class="form-control" name="password" 
    placeholder="Password" 
    onChange={(e)=>setPassword(e.target.value)}
    />

    <button class="btn btn-lg btn-primary btn-block" 
    onClick={handleLogin}
    > Login</button>
    <div style={{textAlign:"center"}}> <a href="/">Home</a></div>
    </div>
  </div>
  );
}

export default Login;
