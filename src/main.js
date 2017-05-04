import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Index from './components/Index';
import Login from './components/Login';
import Search from './components/Search';
import Headlines from './components/Headlines';
import SearchLoopman from './components/SearchLoopman';
import TestSearchLoopman from './components/TestSearchLoopman';
import TestHeadlines from './components/TestHeadlines';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
// import Index from './components/Index';

const Root = () => (
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SearchLoopman} />
        <Route path="/TestSearchLoopman" component={TestSearchLoopman} />
        <Route path="/TestHeadlines" component={TestHeadlines} />
      </Route>
    </Router>
  </div>
  );

ReactDOM.render(<Root />, document.getElementById('app'));
