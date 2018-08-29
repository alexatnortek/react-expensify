import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';


export const ExpenseSummary = ( { expenseCount, totalExpenses} ) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedTotalExpenses = numeral(totalExpenses / 100).format('$0,0.00');
  return <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>
            {formattedTotalExpenses}
          </span>
        </h1>
        <div className="page-header__actions">
          <Link className="button-layout" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>;
}


// export const ExpenseSummary = props => {
//   console.log(props);
//   return (
//     <div>
//       <p>Here is new things</p>
//         <p>
//           Viewing ${props.expenseCount} expenses totalling ${
//             props.totalExpenses
//           }
//         </p>
//     </div>
//   );
// };


const mapStateToProps = state => {

  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    totalExpenses: getTotalExpenses(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary);