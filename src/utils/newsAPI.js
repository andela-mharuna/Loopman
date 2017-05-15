import axios from 'axios';

export const getNewsArticlesApi = (source, option) =>
  axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=${option}&apiKey=${process.env.API_KEY}`)
    .then(response => response.data);

export const getNewsSourcesApi = () =>
  axios.get('https://newsapi.org/v1/sources');

