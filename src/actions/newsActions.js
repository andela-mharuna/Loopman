import NewsApi from '../utils/newsAPI';
import Dispatcher from '../dispatcher/dispatcher';
import newsConstants from '../constants/newsConstants';


class NewsActions {
 /**
 * This function fetches news sources from the news api
 * then dispatches the response received to the dispatcher
 * @returns {object} a dispatcher object.
 */
  getNewsSources() {
    const news = NewsApi.getNewsSourcesApi();
    return news.then((response) => {
      Dispatcher.dispatch({
        actionType: newsConstants.GET_NEWS_SOURCES,
        sources: response.data.sources,
      });
    }).catch(error => error);
  }
/**
 * This function takes 2 parameters and fetches news headlines
 * from the news api then dispatches the response received to the dispatcher
 * @param {string} source, the news source
 * @param {string} option, the sort option for that source
 * @returns {object} a dispatcher object.
 */
  getNewsArticles(source, option) {
    const news = NewsApi.getNewsArticlesApi(source, option);
    return news.then((response) => {
      Dispatcher.dispatch({
        actionType: newsConstants.GET_NEWS_ARTICLES,
        headlines: response.data.articles,
        sourceName: response.data.source,
      });
    }).catch(error => error);
  }
}
export default new NewsActions();
