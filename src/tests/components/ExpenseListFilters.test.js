import React from 'react';
import { shallow } from "enzyme";
import { ExpenseListFilters} from '../../components/ExpenseListFilters';
import { filters, altFilters } from "../fixtures/filters";
import moment from 'moment';


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(<ExpenseListFilters 
    filters={filters}
    setTextFilter={setTextFilter}
    sortByAmount={sortByAmount}
    sortByDate={sortByDate}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    />)
});

test('should render ExpenseListFilter component', () => {
  expect(wrapper).toMatchSnapshot();
});


test("should render ExpenseListFilter component with alt filter data correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const textChange = 'testing';
  wrapper.find('input').simulate('change', {
    target: {
      value: textChange
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(textChange);
});

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: {
      value: 'date'
    }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  wrapper.find("select").simulate("change", {
    target: {
      value: "amount"
    }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDate = moment(0).add(3, "days");
  const endDate = moment(0).add(5, "days");
  wrapper
    .find('withStyles(DateRangePicker)')
    .prop("onDatesChange")({
      startDate,
      endDate
    });
  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle onFocusChange', () => {
  const calendarFocused = 'endDate';
  wrapper
    .find("withStyles(DateRangePicker)")
    .prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
})
