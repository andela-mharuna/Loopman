import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

class Login extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  responseGoogle(googleUser) {
    const id_token = googleUser.getAuthResponse().id_token;
    console.log('access-tokenmr', { accessToken: id_token });
    // anything else you want to do(save to localStorage)...
  }

  render() {
    return (
      <div>
        <GoogleLogin
          socialId="yourClientID"
          class="google-login"
          scope="profile"
          responseHandler={this.responseGoogle}
          buttonText="Login With Google"
        />
      </div>
    );
  }

}

export default Login;
