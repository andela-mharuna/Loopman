import React from 'react';

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
      </div>
    );
  }
}

export default Home;
