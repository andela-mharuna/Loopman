import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { hashHistory } from 'react-router';

const storeUserData = (response) => {
  localStorage.setItem('id_token', response.googleId);
  hashHistory.push('/');
}
const responseGoogle = (response) => {
  console.log(response);
}

const Login = () => {
  return (
    <div className="col-sm-8 col-sm-offset-2">
      <h2> Hey There! Welcome To Loopman!</h2>
      <h4>Stay in the loop, anytime and anywhere...</h4>
      <br /><br />
      <p>Please login to continue</p>
      <GoogleLogin
        clientId="386303946943-jflho43lqvq3fg2eft9hkddb0aka06h4.apps.googleusercontent.com"
        buttonText="Login with Google+"
        onSuccess={storeUserData}
        onFailure={responseGoogle}
      />
    </div>
  )
}

export default Login;