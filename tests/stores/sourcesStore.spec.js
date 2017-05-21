import React from 'react';
import { expect } from 'chai';
import newsStores from '../../src/stores/sourcesStore';
import Dispatcher from '../../src/dispatcher/dispatcher';
import newsConstants from '../../src/constants/newsConstants';
import mockNews from '../testUtils/mockNews';


describe('Sources Store', () => {
  it('should exist', () => {
    expect(newsStores).to.exist;
  });

  it('should be an object', () => {
    expect(newsStores).to.be.an('object');
  });

  it('should have a addChangeListener function', () => {
    expect(newsStores.addChangeListener).to.be.a('function');
  });

  it('should receive sources from dispatcher', () => {
    Dispatcher.dispatch({
      actionType: newsConstants.GET_NEWS_SOURCES,
      sources: mockNews,
    });
    expect(newsStores.fetchNewsSources()).to.eql(mockNews);
  });

  it('should emit change on receiving headlines from dispatcher', () => {
    Dispatcher.dispatch({
      actionType: newsConstants.GET_NEWS_SOURCES,
      sources: mockNews,
    });
    expect(newsStores.emit('change')).to.exist;
  });
});
