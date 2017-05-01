import React from 'react';
import Header from './Header';
import Index from './Index';

class App extends React.Component{
    render(){
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <Header />
                </nav>
                <div className="col-sm-8 col-sm-offset-2">
                    <Index />
                </div>
                
                <div className="container">
                    {this.props.children}
                </div>
            </div>
            
        )
    }
}

export default App;