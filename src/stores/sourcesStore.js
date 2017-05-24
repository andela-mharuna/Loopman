import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import newsConstants from '../constants/newsConstants';

/**
 * This is the store for news sources, it is registered to the dispatcher,
 * and receives a payload from it which it makes available to the view
 * component, SearchLoopman.js
 */
class NewsStores extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
  }

 /**
  * This function returns the news sources
  */

  fetchNewsSources() {
    return this.sources;
  }

  /**
   * This function instantiates an event listener which the view invokes when
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
    switch (result.actionType) {
    case newsConstants.GET_NEWS_SOURCES:
      this.sources = result.sources;
      this.emit('change');
      break;

    default:
      break;
    }
  }

}

const newsStores = new NewsStores();
Dispatcher.register(newsStores.handleNewsAction.bind(newsStores));
export default newsStores;
