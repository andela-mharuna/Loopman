import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import newsConstants from '../constants/newsConstants';

class NewsStores extends EventEmitter {
    constructor() {
        super();

        this.articles = [];
    }

    fetchNewsArticles() {
        return this.articles;
    }

    handleNewsAction(result) {
        switch (result.actionType) {
            case newsConstants.GET_NEWS_ARTICLES:
                this.articles = result.data;
                this.emit('articles_change');
                break;
        }
    }

}

const newsstores = new NewsStores();
Dispatcher.register(newsstores.handleNewsAction.bind(newsstores));
export default newsstores;
