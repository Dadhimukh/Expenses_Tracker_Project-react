import React from 'react';

import './App.css';

import Expenses from './Components/Expenses/Expenses';

const App = () => {

  let expense = [
    {
      id : 1,
      date  : new Date(2021 , 1, 1),
      title : "School Fee",
      amout : 9000
    },
    {
      id : 1,
      date  : new Date(2021 , 10, 4),
      title : "Liberary Fee",
      amout : 1500
    },
    {
      id : 1,
      date  : new Date(2021 , 9, 8),
      title : "Insurence",
      amout : 2300
    },
    {
      id : 1,
      date  : new Date(2021 , 3, 28),
      title : "Hostel Rent",
      amout : 5300
    }
  ]


  return (
    <div>
        <h1 className="ExpensesHeading">Expenses Details</h1>
          <Expenses item={expense} />
    </div>
    );
}

export default App;
