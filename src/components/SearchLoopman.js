import React from 'react';
import axios from 'axios';

class SearchLoopman extends React.Component{
    constructor(){
        super();

        this.state = {
            sources: [],
            searchValue : ""
        };
    }

    handleChange(e){
        this.setState({searchValue: e.target.value});
    }

    componentDidMount(){
        const url = "https://newsapi.org/v1/sources";
        return axios.get(url)
        .then(response => { 
        const sources = response.data.sources;
        this.setState({ sources });
      })
      .catch((error) => {
        console.log(error);
    });
        
    }

    render(){
        let sources = this.state.sources;
        let searchValue = this.state.searchValue.trim().toLowerCase();

        if (searchValue.length > 0){
            sources = sources.filter((s) => {
                return s.name.toLowerCase().match( searchValue );
            });
        }
        
        return(
            <div className="col-sm-8 col-sm-offset-2">
                <input className="form-control" type="text" name="" 
                value={this.state.searchValue} onChange={this.handleChange.bind(this)} placeholder="Find source..." />

                <h3>All Sources: </h3>
                <ul className="list-group">
                    {sources.map((s, index) => {
                      return <li id={index} className="list-group-item" key={index}>{s.name} &emsp;
                      {s.sortBysAvailable.map((option, index) => {
                          return <a key={index} href={`#/headlines?source=${s.id}&sortBy=${option}`}> ({option}) </a>
                      })}
                      </li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default SearchLoopman;