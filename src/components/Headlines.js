import React from 'react';
import * as newsActions from '../actions/newsActions';
import newsStores from '../stores/articlesStore';

/**
 * renderArticles is a pure function which maps through the response gotten
 * from newsapi.org articles endpoint.
 * @param {Array} headlines is the array of data from the api
 *  that is passed to the renderArticles function.
 */

const renderArticles = headlines => headlines.map((headline, index) => (
  <div className="col-sm-8 col-sm-offset-2" key={index}>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4> {headline.publishedAt &&
          headline.publishedAt.slice(0, 10)} - {headline.title} </h4>
      </div>

      <div className="panel-body">
        <div className="row">
          <div className="col-sm-4">
            <img
              width="200" height="150"
              src={headline.urlToImage} alt="image"
            />
          </div>

          <div className="col-sm-8">
            {headline.description}
            <br /> <br />

            <a
              style={{ marginRight: 10 }}
              className="btn btn-primary" href={headline.url}
              target="_blank"
            >View In Browser</a>
            <a
              className="btn btn-primary"
              href={`#/more?source=${headline.url}`}
            >View In App</a>
          </div>
        </div>
      </div>
    </div>
  </div>
));

/**
 * This is the component that displays headlines gotten from various
 * news sources
 */

class Headlines extends React.Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: true,
    };

    this.fetchNewsArticles = this.fetchNewsArticles.bind(this);
  }

  fetchNewsArticles() {
    this.setState({
      articles: newsStores.fetchNewsArticles(),
      loading: false,
    });
  }

  componentDidMount() {
    const articleId = this.props.location.query.source;
    const articleFilter = this.props.location.query.sortBy;

    newsActions.getNewsArticles(articleId, articleFilter);
    newsStores.addChangeListener(this.fetchNewsArticles);
  }

  componentWillUnmount() {
    newsStores.removeChangeListener(this.fetchNewsArticles);
  }

  render() {
    const headlines = this.state.articles.articles;
    const newSourceName = this.state.articles.source;
    const mainHeadlines = <div>{headlines && renderArticles(headlines)}</div>;
    const showLoading = <img src="src/images/loader.gif" />;
    const display = this.state.loading ? showLoading : mainHeadlines;

    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>News From &nbsp;
          {newSourceName &&
             newSourceName.split('-').join(' ').toUpperCase()}</h2>
        <br />
        { display }
      </div>
    );
  }
}

export default Headlines;
