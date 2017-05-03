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
        console.log("sources", sources);
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
        console.log("sourceId", this.props.location);
        return(
            <div>
                <input type="text" name="" value={this.state.searchValue} onChange={this.handleChange.bind(this)} />

                <ul>
                    {sources.map((s, index) => {
                      return <li key={index}>{s.id} <a href={`#/headlines?source=${s.id}`}>View Headlines</a></li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default SearchLoopman;