import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Login from '../../components/Login';
import GoogleLogin from 'react-google-login';

describe('Login Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('should render 1 GoogleLogin component', () => {
    expect(wrapper.find(GoogleLogin)).to.have.length(1);
  });

  it('should render as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

   it('should exist', () => {
    expect(wrapper).to.exist;
  });

});
