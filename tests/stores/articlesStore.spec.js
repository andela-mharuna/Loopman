import React from 'react';
import { expect } from 'chai';
import newsStores from '../../src/stores/articlesStore';
import Dispatcher from '../../src/dispatcher/dispatcher';
import newsConstants from '../../src/constants/newsConstants';
import mockNews from '../testUtils/mockNews';

describe('Articles Store', () => {

  it('should exist', () => {
    expect(newsStores).to.exist;
  });

  it('should be an object', () => {
    expect(newsStores).to.be.an('object');
  });

  it('should have a addChangeListener function', () => {
    expect(newsStores.addChangeListener).to.be.a('function');
  });

  it('should receive headlines from dispatcher', () => {
    Dispatcher.dispatch({
      actionType: newsConstants.GET_NEWS_ARTICLES,
      headlines: mockNews,
    });
    expect(newsStores.fetchNewsArticles).to.eql(mockNews);
  });

  it('should emit change on receiving headlines from dispatcher', () => {
    Dispatcher.dispatch({
      actionType: newsConstants.GET_NEWS_ARTICLES,
      headlines: mockNews,
    });
    expect(newsStores.emit('change')).to.exist;
  });
});
