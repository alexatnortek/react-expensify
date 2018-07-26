import React from 'react';
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from '../../components/ExpenseForm';
import expenses from "../fixtures/expenses";

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data correctly', () => {
  const wrapper = shallow(<ExpenseForm  expense={expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();  
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test("should set note on textarea change", () => {
  const value = "Added new note";
  const wrapper = shallow(<ExpenseForm />);
  // console.log(`Before: ${wrapper.state("note")}`);
  wrapper
    .find("textarea")
    .simulate("change", {
      target: { value }
    });
  // console.log(`After: ${wrapper.state('note')}`);
  expect(wrapper.state("note")).toBe(value);
});

test('should set amount if valid input', () => {
  const value = '20.22';
  const wrapper = shallow(<ExpenseForm/>);
  // console.log(`Before: ${wrapper.state("amount")}`);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('amount')).toBe(value);
  // console.log(`After: ${wrapper.state("amount")}`);
});

test('should not set amount if input invalid', () => {
  const value = '10.222';
  const wrapper = shallow(<ExpenseForm />);
  // console.log(`Before: ${wrapper.state("amount")}`);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
  // console.log(`After: ${wrapper.state("amount")}`);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  // onSubmitSpy('Alex', 'Dude');
  // expect(onSubmitSpy).toHaveBeenCalledWith('Alex', 'Dude');
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  // console.log(wrapper.find("withStyles(SingleDatePicker)").props());
  wrapper.find('withStyles(SingleDatePicker)').prop("onDateChange")(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const wrapper = shallow(<ExpenseForm />);
  // console.log(`Before: ${wrapper.state('calendarFocused')}`);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused: true});
  // console.log(`After: ${wrapper.state('calendarFocused')}`);
  expect(wrapper.state('calendarFocused')).toBe(true);
});