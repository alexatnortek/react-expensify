const getTotalExpenses = expenses => {
  // if ((expenses.length === 0)) {
  //   return 0;
  // } else {
    const total = expenses.map(expense => expense.amount)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total;
  // }
};

export default getTotalExpenses;
