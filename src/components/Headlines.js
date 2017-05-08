import React from 'react';
import * as newsActions from '../actions/newsActions';
import newsstores from '../stores/articlesStore';

const renderArticles = (data) => data.map((article, index) => (
  <div className="col-sm-8 col-sm-offset-2" key={index}>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4> {article.publishedAt && article.publishedAt.slice(0, 10)} - {article.title} </h4>
      </div>

      <div className="panel-body">
        <div className="row">
          <div className="col-sm-4">
            <img width='200' height='150' src={article.urlToImage} alt='image'/>
          </div>
          <div className="col-sm-8">
            {article.description}
            <br/>
            <a href={article.url} target="_blank">...Go To Article...</a>
          </div>

        </div>
      </div>
    </div>
  </div>
));

class Headlines extends React.Component {
  constructor() {
    super();

    this.state = {
      articles: [],
    };

    this.fetchNewsArticles = this.fetchNewsArticles.bind(this);
  }

  fetchNewsArticles() {
    this.setState({ articles: newsstores.fetchNewsArticles() });
  }

  componentDidMount() {
    const articleId = this.props.location.query.source;
    const articleFilter = this.props.location.query.sortBy;

    newsActions.getNewsArticles(articleId, articleFilter);
    newsstores.addChangeListener(this.fetchNewsArticles);
  }

  componentWillUnmount() {
    newsstores.removeChangeListener(this.fetchNewsArticles);
  }

  render() {
   // let urlToImage = null;
    const data = this.state.articles.articles;
    const newSourceName = this.state.articles.source;
   // urlToImage = data.urlToImage;
    //if(!urlToImage){
      //urlToImage = '../../newsImage.jpeg';
    //}
    return (
      <div>
        <h2 style={{textAlign:'center'}}>News From {newSourceName && newSourceName.split('-').join(' ').toUpperCase()}</h2>
        <br />
        {data && <div>{renderArticles(data)}</div>}
      </div>
    );
  }
}

export default Headlines;
