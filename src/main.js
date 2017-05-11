import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Home from './components/Home';
import Headlines from './components/Headlines';
import scrapedNews from './components/scrapedNews';
import SearchLoopman from './components/SearchLoopman';

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
        <Route path="/sources" component={SearchLoopman} onEnter={requireAuth} />
        <Route path="/more" component={scrapedNews} onEnter={requireAuth} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </div>
);

ReactDOM.render(<Root />, document.getElementById('app'));
