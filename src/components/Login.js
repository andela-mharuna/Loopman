import React from 'react';
import GoogleLogin from 'react-google-login';
import { hashHistory } from 'react-router';

/**
 * This function checks if the user is logged in.
 * @param {Array} response
 */

const storeUserData = (response) => {
  localStorage.setItem('id_token', response.googleId);
  hashHistory.push('/sources');
};

const responseGoogle = (response) => {
  console.log(response);
};

const Login = () => (
  <div>
    <GoogleLogin
      clientId='386303946943-jflho43lqvq3fg2eft9hkddb0aka06h4.apps.googleusercontent.com'
      buttonText='Login'
      className='btn btn-primary'
      onSuccess={storeUserData}
      onFailure={responseGoogle}
    />
  </div>
);

export default Login;
