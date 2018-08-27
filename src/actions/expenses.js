import uuid from "uuid";
import database from "../firebase/firebase";

// ADD_EXPENSE

// export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });

//this is modified version of the above code after adding firebase!

export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
})


//below modify database for authenticated users

export const startAddExpense = ( expenseData = {} ) => {
  // return (dispatch) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    // return database.ref('expenses').push(expense).then((ref) => {
    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//modify to remove user expenses

export const startRemoveExpense = ({ id } = {}) => {
  // return dispatch => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//modify to edit user expenses

export const startEditExpense = (id, updates) => {
  // return dispatch => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

// print out database content once
// database.ref('expenses').once('value').then(snapshot => {
//   // console.log(snapshot.val());
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses);
// })

//modify to read user expenses

export const startSetExpenses = () => {
  // return dispatch => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    // return database.ref('expenses').once('value').then(snapshot => {
    return database.ref(`users/${uid}/expenses`).once('value').then(snapshot => {
      // console.log(snapshot.val());
      const expenses = [];
      snapshot.forEach(childSnapshot => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      });
      // console.log(expenses);
      dispatch(setExpenses(expenses))
    })
  }
}