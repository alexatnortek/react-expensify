import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', {note: 'Testing again'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {note: 'Testing again'}
  })
})

test('should setup add expense object with provided values', () => {
  // const expenseData = {
  //   description: 'add expense test', 
  //   amount: 123, 
  //   createdAt: 101,
  //   note: 'this is another test'
  // }

  // const action = addExpense(expenseData);

  const action = addExpense(expenses[2]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    // expense: {
    //   ...expenseData,
    //   id: expect.any(String)
    // }
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {

  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 1000,
    note: 'best mouse trap',
    createdAt: 1000010
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    // expect(1).toBe(1);
    const actions = store.getActions();
    expect(actions[0]).toEqual({ 
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    // database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
    //   expect(snapshot.val()).toEqual(expenseData);
    //   done();
    // });

    //below is the same way as for the above code -- return the promise and attach then to it
    // this is the promise chain

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add default database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  store.dispatch(startAddExpense({})).then(() => {
  // store.dispatch(startAddExpense()).then(() => {
    // expect(1).toBe(1);
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });
});

// test('should setup add expense object with no provided values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       note: '', 
//       amount: 0, 
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   })
// })