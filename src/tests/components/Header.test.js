import React from 'react';
import { shallow } from "enzyme";
// import toJSON from 'enzyme-to-json';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  
  //with ReactShallowRenderer

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // // console.log(renderer.getRenderOutput());
  // expect(renderer.getRenderOutput()).toMatchSnapshot();

  //with enzyme

  const wrapper = shallow(<Header />);
  // expect(wrapper.find('h1').length).toBe(1);
  // expect(wrapper.find('h1').text()).toBe('Expensify');

  // expect(toJSON(wrapper)).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();

})
