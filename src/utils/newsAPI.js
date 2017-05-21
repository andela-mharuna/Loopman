import axios from 'axios';

class NewsApi {
  getNewsArticlesApi(source, option) {
    return axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=${option}&apiKey=${process.env.API_KEY}`);
  }

  getNewsSourcesApi() {
    return axios.get('https://newsapi.org/v1/sources');
  }
}

export default new NewsApi();

