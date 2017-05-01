import React from 'react';

class App extends React.Component{
    constructor(){
         super();
         this.state = {
             messages: [
                 "hullloo boobae ! how are you?",
                 "i am fine, and you?"
             ]
         };
    }


    render(){

        var messageNodes = this.state.messages.map((message) => {
            return (
                <div>
                    {message}
                </div>
            );
        });


        return(
            <div>
                <div>
                    {messageNodes}
                </div>
            </div>
        );
    }
}

export default App;