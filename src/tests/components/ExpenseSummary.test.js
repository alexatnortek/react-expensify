import React from 'react';
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";


test('should correctly render expenseSummary with one expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} totalExpenses={1001} />);
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render expenseSummary with multiple expenses", () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={2} totalExpenses={2002} />);
  expect(wrapper).toMatchSnapshot();

});