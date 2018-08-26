import React from 'react';
import { shallow } from "enzyme";
// import toJSON from 'enzyme-to-json';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
// import Header from '../../components/Header';
import { Header } from "../../components/Header";

test('should render Header correctly', () => {
  
  //with ReactShallowRenderer

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // // console.log(renderer.getRenderOutput());
  // expect(renderer.getRenderOutput()).toMatchSnapshot();

  //with enzyme

  // const wrapper = shallow(<Header />);
  // expect(wrapper.find('h1').length).toBe(1);
  // expect(wrapper.find('h1').text()).toBe('Expensify');

  // expect(toJSON(wrapper)).toMatchSnapshot();

  //here is for header with login/logout

  const wrapper = shallow(<Header startLogout={() => {}}/>);

  expect(wrapper).toMatchSnapshot();

});

test('should call startLogout on button click', () => {
  const startLogoutSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogoutSpy}/>);
  wrapper.find('button').simulate('click');
  expect(startLogoutSpy).toHaveBeenCalled();
});
