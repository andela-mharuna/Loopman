import React from 'react';
import * as newsActions from '../actions/newsActions';
import newsStores from '../stores/sourcesStore';

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

  getNewsSourcesFromActions() {
    newsActions.getNewsSources();
  }

  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  fetchNewsSources() {
    this.setState({ sources: newsStores.fetchNewsSources(), loading: false });
  }

  componentDidMount() {
    this.getNewsSourcesFromActions();
    newsStores.addChangeListener(this.fetchNewsSources);
  }

  componentWillUnmount() {
    newsStores.removeChangeListener(this.fetchNewsSources);
  }

  render() {
    const searchValue = this.state.searchValue.trim().toLowerCase();
    const sources = this.state.sources
      .filter(source => source.name.toLowerCase().match(searchValue));

    const mainArticle = sources.map((source, index) => <li
      style={{ padding: 22 }}
      id={index} className="list-group-item"
      key={index}
    >{source.name} &emsp;
      {source.sortBysAvailable.map((option, index) =>
        <a
          style={{ marginRight: 10 }} className="btn btn-default pull-right"
          key={index} href={`#/headlines?source=${source.id}&sortBy=${option}`}
        >
          {option}&nbsp;
        </a>)}
    </li>);

    const showLoading = <img src="src/images/loader.gif" />;

    const display = this.state.loading ? showLoading : mainArticle;

    return (
      <div className="container-fluid">
        <div className="col-sm-8 col-sm-offset-2">
          <input
            style={{ marginTop: 15 }}
            className="form-control" type="text" name=""
            value={this.state.searchValue} onChange={this.handleChange}
            placeholder="Find source..."
          />

          <h3>All Sources: </h3>
          <ul className="list-group">
            {display}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchLoopman;
