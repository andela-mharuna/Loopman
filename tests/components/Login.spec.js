import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GoogleLogin from 'react-google-login';

import Login from '../../src/components/Login';

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
});
