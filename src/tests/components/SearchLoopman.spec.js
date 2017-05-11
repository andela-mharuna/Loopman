import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchLoopman from '../../components/SearchLoopman';

describe('<SearchLoopman />', () => {
  let wrapper;
  const initialState = {
    sources: [],
    searchValue: '',
    loading: true,
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
  it('should render with className container-fluid', () => {
        expect(wrapper.prop('className')).to.eql('container-fluid');
  });  

});
