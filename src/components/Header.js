import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component{
    render(){
        return (
        <div className="col-sm-12" style={{margin: 15}}>
            <div className="navbar-header">
                 <Link className="navbar-brand" to="/">Loopman</Link>
            </div>
            <ul className="nav navbar-nav">
                <li>
                    <Link to="/bookmarks">Bookmarks</Link>
                </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><button className="btn btn-info log">Log In</button></li>
                <li><button className="btn btn-danger log">Log out </button></li>
            </ul>
            
        </div>
 
        )
    }
}

export default Header;