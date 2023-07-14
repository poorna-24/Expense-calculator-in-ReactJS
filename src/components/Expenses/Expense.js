import React, { useState } from 'react';
// import ExpenseItem from './ExpenseItem';

import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';
import './Expense.css';
import ExpensesList from './ExpensesList';

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState('2023');
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    // console.log('selected');
    // console.log(selectedYear);
  };
  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpense} />
        <ExpensesList item={filteredExpense} />
        {/* {expenseContent} */}
        {/* {props.item.map((expense) => ( */}
        {/* {filteredExpense.length === 0 && <p>No Expense</p>}
        {filteredExpense.length > 0 &&
          filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              price={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* // {filteredExpense.length === 0 ? (
        //   <p>No Expense</p>
        // ) : (
        //   filteredExpense.map((expense) => (
        //     <ExpenseItem
        //       key={expense.id}
        //       title={expense.title}
        //       price={expense.amount}
        //       date={expense.date}
        //     />
        //   ))
        // )} */}
        {/* {filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.amount}
            date={expense.date}
          />
        ))} */}
        {/* <ExpenseItem
          id={props.item[0].title}
          price={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          id={props.item[1].title}
          price={props.item[1].amount}
          date={props.item[1].date}
        />
        <ExpenseItem
          id={props.item[2].title}
          price={props.item[2].amount}
          date={props.item[2].date}
        />
        <ExpenseItem
          id={props.item[3].title}
          price={props.item[3].amount}
          date={props.item[3].date}
        /> */}
      </Card>
    </div>
  );
};
export default Expense;
