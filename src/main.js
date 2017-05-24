import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Home from './components/Home';
import Headlines from './components/Headlines';
import ScrapedNews from './components/scrapedNews';
import SearchLoopman from './components/SearchLoopman';
import NotFoundComponent from './components/NotFoundComponent';

require('./styles/App.scss');

/**
 * These are variables passed to the default requireAuth function
 * @param {String} nextState
 * @param {String} replace
 * The requireAuth function validates that the user is signed in and
 * then redirects to the home page if the user is not signed in.
 */
const requireAuth = (nextState, replace) => {
  const token = localStorage.getItem('id_token');
  if (!token) {
    replace({ pathname: '/' });
  }
};


const Root = () => (
  <div>
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="/headlines" component={Headlines} onEnter={requireAuth} />
        <Route path="/sources" component={SearchLoopman}
          onEnter={requireAuth} />
        <Route path="/more" component={ScrapedNews} onEnter={requireAuth} />
        <Route path="/login" component={Login} />
      </Route>
      <Route path="*" component={NotFoundComponent} />
    </Router>
  </div>
);

ReactDOM.render(<Root />, document.getElementById('app'));
