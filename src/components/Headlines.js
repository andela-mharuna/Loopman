import React from 'react';
import { hashHistory } from 'react-router';
import NewsActions from '../actions/newsActions';
import newsStores from '../stores/articlesStore';
import RenderArticles from './RenderHeadlines';

 /**
 * This is the component that displays headlines gotten from various
 * news sources
 */

class Headlines extends React.Component {
  constructor() {
    super();

    this.state = {
      headlines: [],
      loading: false,
      sourceName: '',
    };

 /**
 * This binds the function to the "this" in the constructor.
 */
    this.fetchNewsArticles = this.fetchNewsArticles.bind(this);
  }

  /**
  * This fetches headlines from the store and sets them as state for this
  * component
  */
  fetchNewsArticles() {
    const articles = newsStores.fetchNewsArticles;
    const sourceName = newsStores.fetchSource;
    this.setState({
      headlines: articles,
      sourceName,
      loading: false,
    });
  }

 /**
 * This function is called when component mounts
 */
  componentDidMount() {
    const articleId = this.props.location.query.source;
    const articleFilter = this.props.location.query.sortBy;
    NewsActions.getNewsArticles(articleId, articleFilter);
    this.setState({ loading: true });
    newsStores.addChangeListener(this.fetchNewsArticles);
  }

  /**
  * This function is called once component unmounts
  */

  componentWillUnmount() {
    newsStores.removeChangeListener(this.fetchNewsArticles);
  }

  /**
  * This shows the loading spinner before content on page is rendered.
  */
  renderHeadlines() {
    const { loading, headlines } = this.state;
    if (loading) {
      return (<img src="src/images/loader.gif" alt="Loading..." />);
    }
    return (<RenderArticles headlines={headlines} />);
  }

/**
 * This renders headlines on the page
 */
  render() {
    const newSourceName = this.state.sourceName;
    return (
      <div>
        <h2 className="col-sm-8 col-sm-offset-2 headlines-header" style={{ textAlign: 'center' }}>
          <a
            title="previous page"
            onClick={() => hashHistory.goBack()}
            href=""
          >
            <i className="fa fa-angle-left" />
          </a>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          News From &nbsp;
          {newSourceName &&
            newSourceName.split('-').join(' ').toUpperCase()}
        </h2>
        {this.renderHeadlines()}
      </div>
    );
  }
}

export default Headlines;
