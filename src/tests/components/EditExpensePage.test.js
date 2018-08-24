import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

// let wrapper, editExpense, removeExpense, history;
// let wrapper, editExpense, startRemoveExpense, history;
let wrapper, startEditExpense, startRemoveExpense, history;


 beforeEach(() => {
  //  editExpense = jest.fn();
   startEditExpense = jest.fn();
  //  removeExpense = jest.fn();
   startRemoveExpense = jest.fn();
   history = { push: jest.fn() };
   wrapper = shallow(<EditExpensePage 
    // editExpense={editExpense} 
     startEditExpense={startEditExpense} 
    // removeExpense={removeExpense} 
    startRemoveExpense={startRemoveExpense}
    history={history} 
    expense={expenses[2]}
  />);
 });

test('should render EditExpensePage correctly', () => {
 expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  // expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle onRemove correctly', () => {
  // wrapper.find('button').prop("onClick")();
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith("/");
  // expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
})