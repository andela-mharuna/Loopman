import React from 'react';
import Header from './Header';

/**
 * This is the parent component in which other components are
 * displayed as props.children.
 * @param {*} props
 */
const App = props => (
  <div className="container-fullwidth">
    <div>
      <Header />
    </div>
    <div>
      {props.children}
    </div>
    <div />
  </div>
);

export default App;
