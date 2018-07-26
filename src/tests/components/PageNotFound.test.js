import React from 'react';
import { shallow } from "enzyme";
import PageNotFound from '../../components/PageNotFound'

test('should render NotFoundPage page', () => {
  const wrapper = shallow(<PageNotFound />);
  expect(wrapper).toMatchSnapshot();
})