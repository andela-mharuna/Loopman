import React from 'react';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome';
import { hashHistory } from 'react-router';

/**
 * This function logs the user into the app and stores their information
 * which is then deleted once they log out.
 * @param {Array} response
 */
const storeUserData = (response) => {
  localStorage.setItem('id_token', response.googleId);
  hashHistory.push('/sources');
};

const responseGoogle = (response) => {
  alert('Oops! Something went wrong. Please try again');
};

/**
 *  This is an npm module: react-google-login component which is used to
 * log in the user.
 */

const Login = () => (
  <div>
    <GoogleLogin
      clientId={`386303946943-jflho43lqvq3f
      g2eft9hkddb0aka06h4.apps.googleusercontent.com`}
      className="btn btn-primary"
      onSuccess={storeUserData}
      onFailure={responseGoogle}
    >
      <FontAwesome
        name="google"
        className="super-crazy-colors"
      />
      <span> Login with Google+ </span>
    </GoogleLogin>
  </div>
);

export default Login;
