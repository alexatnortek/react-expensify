import React from "react";
import { connect } from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 
      ?  
      (
        <p>No expenses</p>
      ) 
      : 
      (
        props.expenses.map(expense => {
          return <ExpenseListItem key={expense.id} {...expense} />
        })
      )
    }
  </div>
)

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
    // expenses: state.expenses,
    // filters: state.filters
  }
}
export default connect(mapStateToProps)(ExpenseList);

// above is the same as below!
// const ConnectedExpenseList = connect(state => {
// export default connect(state => {  
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList);

// export default ConnectedExpenseList;

    // {props.expenses.map((expense, index) => (
    //   <div>
    //     <ExpenseListItem
    //     description={expense.description}
    //     amount={expense.amount}
    //     createdAt={expense.createdAt}
    //     />
    //   </div>
    // ))
    // }