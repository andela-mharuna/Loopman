import axios from 'axios';

export {getNewsArticles};

function getNewsArticles(){
    const url = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe';
    return axios.get(url).then(response => console.log(response));
}