import React from 'react';
import Footer from './Footer';
/**
 * This is the welcome page and the landing page where
 * users log into the application.
 */

const Home = () => (
  <div>
    <div className="jumbotron jumbo" style={{ textAlign: 'center' }}>
      <h2>Hey there, welcome to Loopman</h2>
      <h5><i>We help you stay abreast of current news all
                  around the world, anytime and anywhere...</i></h5>
    </div>
    <div>
      <img
        src="src/images/all-news.jpg" alt="home-image"
        width="100%" height="700"
      />
    </div>
    <Footer />
  </div>
);

export default Home;
