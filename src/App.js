// import './App.css';

import ExpenseItem from "./Components/ExpenseItem";

function App() {

  let expenseDate = new Date(2021 , 3, 28);
  let expenseTitle = "School Fee";
  let expenseAmout = 300;

  return (
    <div>
        <h1>Hello!</h1>
        <ExpenseItem 
            date={expenseDate} 
            title={expenseTitle} 
            amount={expenseAmout} 
            />

    </div>
    );
}

export default App;
