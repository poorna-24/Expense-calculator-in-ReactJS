import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
const ExpensesList = (props) => {
  //   let expenseContent = <p>No Expense</p>;
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found!</h2>;
  }

  //   if (props.item.length > 0) {
  //     expenseContent =
  //   }
  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
