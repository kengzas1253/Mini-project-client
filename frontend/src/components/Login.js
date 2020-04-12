import React from 'react';
import './Login.css';

const Login =()=>{
  return (
    <div class="body1">
    <div class="wrapper">
    <form class="form-signin">
    <h2 class="form-signin-heading">Please login</h2>
    <input type="text" class="form-control" name="username" placeholder="Email Address" />
    <input type="password" class="form-control" name="password" placeholder="Password" />
    <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
  </div>
  </div>
  );
}

export default Login;
