import React from 'react';
import Login from './Login';
/**
 * This is the welcome page and the landing page where
 * users log into the application.
 */

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron" style={{ textAlign: 'center' }}>
          <h2>Hey there, welcome to Loopman</h2>
          <h5><i>We help you stay abreast of current news all
                  around the world, anytime and anywhere...</i></h5>
        </div>
        <div>
          <img
            src="src/images/news-image.jpg" alt="home-image"
            width="100%" height="700"
          />
        </div>
        <div>
          <h4 style={{ textAlign: 'center' }}><i>70 news sources available
            for you to explore....
            Excited? Sign in and dive in! </i></h4>
        </div>
      </div>
    );
  }
}

export default Home;
