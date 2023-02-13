import React, { useState } from "react";

const ExpenseForm = (props) => {

  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleUpdateHandler = (event) => {
    setNewTitle(event.target.value);
  }
  const amountUpdateHandler = (event) => {
    setNewAmount(event.target.value);
  }
  const dateUpdateHandler = (event) => {
    setNewDate(event.target.value);
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    const newExpenseFormData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate)
    }
    props.expenseFormData(newExpenseFormData);

    console.log(newExpenseFormData);
    setNewTitle("")
    setNewAmount("")
    setNewDate('')
  }




  return (

    <form onSubmit={submitFormHandler}>
      <div>
        <label>AddTitle</label>
        <input type="text" onChange={titleUpdateHandler} value={newTitle} />

        <label>AddAmount</label>
        <input type="number" onChange={amountUpdateHandler} value={newAmount} />

        <label>AddDate</label>
        <input type="date" onChange={dateUpdateHandler} value={newDate} />

        <button type="submit">Add Expense</button>


      </div>
    </form>
  );
}

export default ExpenseForm;