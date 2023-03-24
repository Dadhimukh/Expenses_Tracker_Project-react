import React, { useState } from "react";
import "../styles/ExpenseForm.css"
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

    <form onSubmit={submitFormHandler} className="formContainer">
      <div className="formData">

        <div className="title">
          <label>AddTitle</label>
          <input type="text" onChange={titleUpdateHandler} value={newTitle} />
        </div>

        <div className="amount">
          <label>AddAmount</label>
          <input type="number" onChange={amountUpdateHandler} value={newAmount} />
        </div>

        <div className="date">
          <label>AddDate</label>
          <input type="date" onChange={dateUpdateHandler} value={newDate} />
        </div>

      </div>

      <div className="submitButton">
          <button type="submit">Add Expense</button>
      </div>


    </form>
  );
}

export default ExpenseForm;