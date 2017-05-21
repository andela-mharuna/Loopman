import React from 'react';
import { expect } from 'chai';
import axios from 'axios';
import sinon from 'sinon';
import NewsActions from '../../src/actions/newsActions';
import Dispatcher from '../../src/dispatcher/dispatcher';
import newsConstants from '../../src/constants/newsConstants';
import mockNews from '../testUtils/mockNews';


describe('News Actions', () => {
  const axiosSpy = sinon.stub(axios, 'get', (arg) => {
    return arg.includes('sources') ? Promise.resolve({
      data: {
        sources: mockNews,
      },
    }) : Promise.resolve({
      data: mockNews,
    });
  });

  const dispatcherSpy = sinon.spy(Dispatcher, 'dispatch');
  afterEach(() => {
    axiosSpy.reset();
    dispatcherSpy.reset();
  });

  it('should exist', () => {
    expect(NewsActions.getNewsSources).to.exist;
  });

  it('should call dispatcher with the specified actions', () => {
    NewsActions.getNewsSources().then((response) => {
      expect(axiosSpy.calledOnce).to.equal(true);
      expect(dispatcherSpy.calledOnce).to.equal(true);
      expect(dispatcherSpy.calledWith({
        actionType: newsConstants.GET_NEWS_SOURCES,
        sources: mockNews,
      })).to.equal(true);
    });
  });

  it('should be a function', () => {
    expect(NewsActions.getNewsSources).to.be.a('function');
  });

  it('should send headlines to dispatcher', () => {
    NewsActions.getNewsArticles().then(response => {
      expect(dispatcherSpy.calledOnce).to.equal(true);
      expect(axiosSpy.calledOnce).to.equal(true);
      expect(dispatcherSpy.calledWith({
        actionType: newsConstants.GET_NEWS_ARTICLES,
        headlines: mockNews.articles,
        sourceName: mockNews.source,
      })).to.equal(true);
    });
  });
});
