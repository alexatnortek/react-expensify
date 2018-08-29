import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
// import { addExpense } from "../actions/expenses";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
  // this.props.addExpense(expense);
  this.props.startAddExpense(expense);
  this.props.history.push('/');
}
render() {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    </div>
  );
}
}

// const AddExpensePage = (props) => (
//   <div>
//     <h1>Expense Form</h1>
//     <ExpenseForm  
//       onSubmit={(expense) => {
//         // console.log(expense);
//         // props.dispatch(addExpense(expense));
//         props.onSubmit(expense);
//         props.history.push('/');
//       }}/>
//   </div>
// );

const mapDispatchToProps = dispatch => ({
  // addExpense: expense => dispatch(addExpense(expense))
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);