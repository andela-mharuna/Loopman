import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchLoopman from '../../src/components/SearchLoopman';

describe('SearchLoopman Component', () => {
  let wrapper;
  const initialState = {
    sources: [],
    searchValue: '',
    loading: true,
  };

  beforeEach(() => {
    wrapper = shallow(<SearchLoopman />);
  });

  it('should render as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should have state in props', () => {
    expect(wrapper.state())
      .to
      .deep
      .equal(initialState);
  });
  it('should render with className container-fluid', () => {
    expect(wrapper.prop('className')).to.eql('container-fluid');
  });
});
