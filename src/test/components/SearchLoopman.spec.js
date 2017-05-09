import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import SearchLoopman from '../../components/SearchLoopman';

describe('<SearchLoopman />', () => {
  let wrapper;
  const initialState = {
    sources: [],
    searchValue: '',
  };

  beforeEach(() => {
    wrapper = shallow(<SearchLoopman />);
  });

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should have state in props', () => {
    expect(wrapper.state())
      .to
      .deep
      .equal(initialState);
  });
  
});
