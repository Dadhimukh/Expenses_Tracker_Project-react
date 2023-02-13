import React from "react";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const formDataHandler = (dataFromExpenseFormjs) => {
    const newExpenseFormData = {
      ...dataFromExpenseFormjs,
      id: Math.random().toString()
    }
    props.dataFromExpense(newExpenseFormData);

    console.log(newExpenseFormData);
  }


  return (
    <>
      <ExpenseForm expenseFormData={formDataHandler} />
    </>
  );
}

export default NewExpense;