import React from 'react';
import { expect } from 'chai';
import Dispatcher from '../../src/dispatcher/dispatcher';

describe('Dispatcher', () => {
  it('should be an object', () => {
    expect(Dispatcher).to.be.an('object');
  });

  it('should exist', () => {
     expect(Dispatcher).to.exist;
  });
});
