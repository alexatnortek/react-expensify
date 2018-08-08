import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';


export const ExpenseSummary = ( { expenseCount, totalExpenses} ) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedTotalExpenses = numeral(totalExpenses / 100).format('$0,0.00');
  return (
  <div>
    <h1>Viewing {expenseCount} {expenseWord} totalling {formattedTotalExpenses}</h1>
  </div>
  )
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