import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from '../../components/Home';

describe('Home Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should render as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should have 1 h2 tag', () => {
    expect(wrapper.find('h2')).to.have.length(1);
  });

 it('should have 1 h5 tag', () => {
    expect(wrapper.find('h5')).to.have.length(1);
  });

 it('should have a render function', () => {
        expect(wrapper.render).to.be.a('function');
  });

});
