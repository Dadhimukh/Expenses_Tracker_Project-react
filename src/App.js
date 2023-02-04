// import './App.css';

import ExpenseItem from "./Components/ExpenseItem";

function App() {

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
        <h1>Hello!</h1>
        <ExpenseItem 
            date={expense[0].date} 
            title={expense[0].title} 
            amount={expense[0].amout} >
        </ExpenseItem>
        <ExpenseItem 
            date={expense[1].date} 
            title={expense[1].title} 
            amount={expense[1].amout} >
        </ExpenseItem>
        <ExpenseItem 
            date={expense[2].date} 
            title={expense[2].title} 
            amount={expense[2].amout} >
        </ExpenseItem>
        <ExpenseItem 
            date={expense[3].date} 
            title={expense[3].title} 
            amount={expense[3].amout} >
        </ExpenseItem>

    </div>
    );
}

export default App;
