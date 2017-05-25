import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import newsConstants from '../constants/newsConstants';

/**
 * This is the store for headlines, it is registered to the dispatcher,
 * and receives a payload from it which it makes available to the view
 * component, Headlines.js
 */
class ArticlesStore extends EventEmitter {
  constructor() {
    super();

    this.articles = [];
    this.sourceName = '';
  }

  /**
  * This function returns the headlines
  */

  get fetchNewsArticles() {
    return this.articles;
  }

  /**
   * This function returns the news source name for the fetched headlines.
   */
  get fetchSource() {
    return this.sourceName;
  }

  /**
   * This function instantiates a change listener which the view invokes when
   * there is a change in state. It requires a:
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on('change', callback);
  }

  /**
   * This function removes the change listener when the view component
   * unmounts. It requires a:
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

  /**
   * This function uses a switch statement to specify which payload to receive
   * from the dispatcher.
   * @param {object} result
   */
  handleNewsAction(result) {
    if (result.actionType === newsConstants.GET_NEWS_ARTICLES) {
      this.articles = result.headlines;
      this.sourceName = result.sourceName;
      this.emit('change');
    }
  }

}

const articlesStore = new ArticlesStore();
Dispatcher.register(articlesStore.handleNewsAction.bind(articlesStore));
export default articlesStore;
