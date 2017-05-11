import React from 'react';
import { Link, hashHistory } from 'react-router';
import Login from './Login';


class Header extends React.Component {
  constructor() {
    super();

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  /**
   * This function is called when a user clicks on the logout button.
   */

  handleLogoutClick() {
    localStorage.removeItem('id_token');
    hashHistory.push('/');
  }

/**
 * This function displays the component on the page.
 * The component renders the links in the navigation bar.
 */
  render() {
    function LogOutButton(props) {
      return (
        <button
          className="btn btn-default btn-danger"
          onClick={props.onClick}
        >Log out
        </button>
      );
    }

    let button = null;
    const IsLoggedIn = localStorage.getItem('id_token');
    if (IsLoggedIn) {
      button = <LogOutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <Login />;
    }

    return (
      <nav
        className="navbar navbar-default navbar-collapse"
        style={{ marginBottom: 0 }}>

        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand active" to="/">Loopman</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="sources">News Sources</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right navbar-btn">
            <li>
              {button}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
