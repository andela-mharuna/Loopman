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
        const sourceId = this.props.location.search.slice(8);
        const url = `https://newsapi.org/v1/articles?source=${sourceId}&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe`;
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
                 <div className="col-sm-12" key={index}>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"> <span className="btn">{article.title} by {article.author}</span></h3>
                        </div>
                        <div className="panel-body">
                            { article.description } 
                            <a href={article.url} target="_blank">Read More...</a>
                        </div>
                    </div>
                </div>
             );
            });
        }
        return (
            <div className="col-sm-11 col-sm-offset-1">
                <h2>Latest News From {this.state.headlines.source}</h2>
                <p></p>
               {data && <div>{renderArticles()}</div>}
            </div>  
        );

    }
}

export default Headlines;