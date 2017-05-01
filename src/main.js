import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Login from './components/Login';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import Index from './components/Index';

const Root = () => {
  return (
    <div>
      <Router history={browserHistory}>
         <Route path="/" component={App} />
          <Route path="/login" component={Login} />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('app'));
