import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Login from './components/Login';
import Home from './components/Home';
import Headlines from './components/Headlines';
import scrapedNews from './components/scrapedNews';
import SearchLoopman from './components/SearchLoopman';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const requireAuth = (nextState, replace) => {
  const urlPath = window.location.hash;
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
