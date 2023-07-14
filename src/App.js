import React, { useState } from 'react';
import './App.css';
// import Chart from './components/Chart/Chart';

import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2025, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2024, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // { title: 'car insurence', amount: 1224, date: new Date(2022, 2, 20) },
  // { title: 'health ', amount: 12, date: new Date(2022, 2, 21) },
  // { title: 'bike insurence', amount: 24, date: new Date(2022, 2, 22) },
  // { title: 'artificial', amount: 10, date: new Date(2022, 2, 23) },
  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // console.log('im expense');
    // console.log(expense);
  };
  return (
    <div>
      {/* <h2>Hello</h2> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <Chart /> */}
      <Expense item={expenses} />
    </div>
  );
};

export default App;
