import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
// import AddExpensePage from './components/AddExpensePage';

import './firebase/firebase';

// import './playground/promises';

const store = configureStore();

// console.log(store.getState());
// const expenseOne = store.dispatch(addExpense({description: 'Water Bill', amount: 20000}));
// const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 40000, createdAt: 1000 }));
// const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 120000 }));


// console.log(store.getState());
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 3000);
// store.dispatch(sortByAmount());
// const state = store.getState();
// const getVisible = getVisibleExpenses(state.expenses, state.filters);
// console.log(getVisible);
// console.log(
//   getVisibleExpenses(store.getState().expenses, store.getState().filters)
// );
// store.dispatch(setTextFilter("water"));
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState.state.filters);
// console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
// console.log(state.expenses, state.filters);


const jsx = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));