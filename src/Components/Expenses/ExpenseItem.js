import React,{ useState } from 'react';
// import { useState } from 'react';
import "./ExpenseDate.css";

import ExpenseDate from "./ExpenseDate";

import Card from '../UI/Card';


const ExpenseItem = (props) => {

      // const [newTitle, setNewTitle] = useState("");

      // const [title, setTitle] = useState(props.title);

      // const clickHandler = () =>{
      //       setTitle(newTitle);
      // }

      // const changeHandler = (event) =>{
      //       setNewTitle(event.target.value);
      // }

      return(
            <Card className="expense-item">
                  <ExpenseDate date={props.date}/>
                  <div className="expense-item__description"><h2>{ props.title }</h2></div>
                  <div className="expense-item__price">${ props.amount}</div>
                  {/* <input type="text" value={newTitle} onChange={changeHandler}></input>
                  <button onClick={clickHandler}>Click</button> */}
            </Card>
      );
};

export default ExpenseItem;