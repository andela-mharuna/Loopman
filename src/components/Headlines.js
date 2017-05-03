import React from 'react';
import axios from 'axios';

class Headlines extends React.Component{
    constructor(){
        super();

        this.state = {
            headlines : []
        }
    }

    componentDidMount(){
        const sourceId = this.props.location.query.source;
        const sourceFilter = this.props.location.query.sortBy;
        const url = `https://newsapi.org/v1/articles?source=${sourceId}&sortBy=${sourceFilter}&apiKey=213327409d384371851777e7c7f78dfe`;
        return axios.get(url)
        .then(response => { 
        const headlines = response.data;
        this.setState({ headlines });
      })
      .catch((error) => {
        console.log(error);
    });

    }

    render(){
        const data = this.state.headlines.articles;

        function renderArticles () {
            return data.map((article, index) => {
             return (
                 <div className="col-sm-11" key={index}>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"> <span className="btn">{article.title}</span></h3>
                        </div>
                        <div className="panel-body">
                            { article.description } 
                            <a href={article.url} target="_blank">...View Full Article...</a>
                        </div>
                    </div>
                </div>
             );
            });
        }
        return (
            <div className="col-sm-11 col-sm-offset-1">
                <h2>News From {this.state.headlines.source}</h2>
                <p></p>
               {data && <div>{renderArticles()}</div>}
            </div>  
        );

    }
}

export default Headlines;