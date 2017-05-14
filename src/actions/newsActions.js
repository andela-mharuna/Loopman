import { getNewsSourcesApi, getNewsArticlesApi } from '../utils/newsAPI';
import Dispatcher from '../dispatcher/dispatcher';
import newsConstants from '../constants/newsConstants';

 /**
 * This function fetches news sources from the api
 */
export const getNewsSources = () => getNewsSourcesApi()
  .then((response) => {
    Dispatcher.dispatch({
      actionType: newsConstants.GET_NEWS_SOURCES,
      sources: response.data.sources,
    });
  }).catch(error => error);

 /**
 * This function fetches news headlines from the api.
 */
export const getNewsArticles = (source, option) =>
  getNewsArticlesApi(source, option).then((headlines) => {
    Dispatcher.dispatch({
      actionType: newsConstants.GET_NEWS_ARTICLES,
      headlines: headlines.articles,
      sourceName: headlines.source,
    });
  }).catch(error => error);
