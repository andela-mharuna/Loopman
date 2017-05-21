import React from 'react';
import NewsActions from '../actions/newsActions';
import newsStores from '../stores/sourcesStore';

/**
 * This component displays the list of all news sources available
 * in the application and allows you searxh through that list using
 * an input tag.
 */

class SearchLoopman extends React.Component {
  constructor() {
    super();

    this.state = {
      sources: [],
      searchValue: '',
      loading: true,
    };

    this.fetchNewsSources = this.fetchNewsSources.bind(this);
    this.getNewsSourcesFromActions = this.getNewsSourcesFromActions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * This function triggers the flux action which in turn makes a call
   * to the newsapi.org api.
   */

  getNewsSourcesFromActions() {
    NewsActions.getNewsSources();
  }

  /**
   *
   * This function handles event change on entering a search value into
   * the input field
   */
  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  /**
   * This function updates the state of the component with information
   * fetched from the flux store.
   */

  fetchNewsSources() {
    this.setState({ sources: newsStores.fetchNewsSources(), loading: false });
  }

  /**
   *  This is react lifecycle function that is called once the component mounts
   */

  componentDidMount() {
    this.getNewsSourcesFromActions();
    newsStores.addChangeListener(this.fetchNewsSources);
  }

  /**
   * This function is called once the component unmounts
   */

  componentWillUnmount() {
    newsStores.removeChangeListener(this.fetchNewsSources);
  }

/**
 * This is a React lifecyle method that is triggered when state of the
 * component changes.
 */
  render() {
    /**
     * Here, the javascript filter and match function are used to filter
     * through the listed sources and return the matched sources
     */

    const searchValue = this.state.searchValue.trim().toLowerCase();
    const sources = this.state.sources
      .filter(source => source.name.toLowerCase().match(searchValue));

    const mainArticle = sources.map((source) =>
      <li
        style={{ padding: 22, backgroundColor: '#EEF8FC' }}
        className="list-group-item"
        key={source.id}
      >{source.name} &emsp;

        {source.sortBysAvailable.map((option, index) =>
          <a
            style={{ marginRight: 10 }} className="btn btn-primary pull-right"
            key={index} href={`#/headlines?source=${source.id}&sortBy=${option}`}
          >
            {option[0].toUpperCase() + option.substring(1)}&nbsp;
          </a>,
        )}
      </li>);

    /**
     * This displays a spinner gif before the page renders fully.
     */
    const showLoading = <img src="src/images/loader.gif" />;

    const display = this.state.loading ? showLoading : mainArticle;

    return (
      <div className="container-fluid">
        <div className="col-sm-8 col-sm-offset-2">
          <input
            style={{ marginTop: 15 }}
            className="form-control input-style" type="text" name=""
            value={this.state.searchValue} onChange={this.handleChange}
            placeholder="Find source..."
          />

          <h3 className="news-sources">NEWS SOURCES </h3>
          <ul className="list-group list_group">
            {display}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchLoopman;
