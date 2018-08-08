import getTotalExpenses from "../../selectors/expenses-total";
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should correctly add up multiple expenses', () => {
  const total = getTotalExpenses(expenses);
  // console.log(total);
  expect(total).toEqual(114195);
});

test('should return 0 when no expenses', () => {
  const total = getTotalExpenses([]);
  expect(total).toEqual(0);
  // console.log(total);
});

test('should return only one value when only one imput', () => {
  const total = getTotalExpenses([expenses[0]]);
  expect(total).toEqual(195);
  // console.log(total);
})

