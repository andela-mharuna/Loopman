import axios from 'axios';
import API_KEY from '../api';

export const getNewsArticlesApi = (source, option) =>
  axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=${option}&apiKey=${API_KEY}`)
    .then(response => response.data);

export const getNewsSourcesApi = () =>
  axios.get('https://newsapi.org/v1/sources');

