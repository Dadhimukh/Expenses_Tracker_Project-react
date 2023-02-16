import React, { useState } from 'react';

import './App.css';

import Expenses from './Components/Expenses/Expenses';

import NewExpense from './Components/NewExpense/NewExpense';


let dummyExpense = [
  {
    id: 1,
    date: new Date(2021, 1, 1),
    title: "School Fee",
    amount: 9000
  },
  {
    id: 1,
    date: new Date(2021, 10, 4),
    title: "Liberary Fee",
    amount: 1500
  },
  {
    id: 1,
    date: new Date(2021, 9, 8),
    title: "Insurence",
    amount: 2300
  },
  {
    id: 1,
    date: new Date(2021, 3, 28),
    title: "Hostel Rent",
    amount: 5300
  }
]


const App = () => {

  const [expenses, setExpenses] = useState(dummyExpense);

  const dataFromExpenseHandler = (allNewData) => {
    console.log(allNewData);
    const updatesExpense = [allNewData, ...expenses]
    setExpenses(updatesExpense)
  }


  return (
    <div>
      <NewExpense dataFromExpense={dataFromExpenseHandler} />
      <h1 className="ExpensesHeading">Expenses Details</h1>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
