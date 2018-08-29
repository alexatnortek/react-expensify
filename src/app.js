import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from './store/configureStore';
// import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
// import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
// import AddExpensePage from './components/AddExpensePage';
import LoadingPage from './components/LoadingPage';

import { firebase } from "./firebase/firebase";

// import './firebase/firebase';

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

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};


// ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

//replace with loading jif the loading message

ReactDOM.render(<LoadingPage/>, document.getElementById("app"));

// store.dispatch(startSetExpenses()).then(() => {
//   ReactDOM.render(jsx, document.getElementById("app"));
// })

// ReactDOM.render(jsx, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // console.log('log in');
    console.log('uid', user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      // ReactDOM.render(jsx, document.getElementById("app"));
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    // console.log('log out');
    // ReactDOM.render(jsx, document.getElementById("app"));
    store.dispatch(logout());
    renderApp();
    history.push('/')
  }
});