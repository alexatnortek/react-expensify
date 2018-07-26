console.log('redux expensify running');
import uuid from 'uuid';
import { createStore, combineReducers } from "redux";

// ADD_EXPENSE

const addExpense = ( { description = '', note = '', amount = 0, createdAt = 0 } = {} ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',    
  id
});

// EDIT_EXPENSE

const editExpense = (id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//Expences reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {

    case 'ADD_EXPENSE':
      // return state.concat(action.expense);
//same as above
      return [
        ...state,
        action.expense
      ];

    case 'REMOVE_EXPENSE':
    // console.log('id', id);
      return state.filter(({id}) => id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map ( expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};

//SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//SORT_BY_AMOUNT

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

//SORT_BY_DATE

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

//SET_START_DATE

const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

//SET_END_DATE

const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});


//Filters reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }

    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }  

    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }  
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }

    default:
      return state;
  }
};


//get visible expenses

// const getVisibleExpenses = (expenses, filters) => {
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  // return expenses;
  return expenses.filter(expense => {
 
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
    // return expense.text !== text;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    } else {
      return 0;
    }
  })
};

//Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

// see below how to monitor changes in the store! -- use subscribe!
// store.subscribe(() => {
//   console.log(store.getState());
// });


store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: "Tea", amount: 200, createdAt: -1000 }));

// console.log(expenseOne);
// store.dispatch(removeExpense( {id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(250));

const demoState = {
  expenses: [{
    id:'hhkkkkj',
    description: 'January Rent',
    note: 'This was the final payment for this address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// const user = {
//   name: 'Dude',
//   age: 30
// }

// console.log({
//   ...user,
//   location: 'Seattle',
//   age: 60
// });