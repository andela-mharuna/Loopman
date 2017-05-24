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
  console.log(response);
  localStorage.setItem('id_token', response.googleId);
  localStorage.setItem('googleGivenName', response.profileObj.givenName);
  hashHistory.push('/sources');
};

const responseGoogle = () => {
  alert('Oops! Something went wrong. Please try again');
};

/**
 *  This is an npm module: react-google-login component which is used to
 * log in the user.
 */

const Login = () => (
  <div>
    <GoogleLogin
      clientId={process.env.CLIENT_ID}
      className="btn btn-danger"
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
