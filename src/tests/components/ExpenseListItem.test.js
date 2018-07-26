import React from 'react';
import { shallow } from "enzyme";
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses';

test('should render a list item in ExpenseListItem component', () => {
  // const { description, amount, createdAt, id } = expenses[0];
  const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
})