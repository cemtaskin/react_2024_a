import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const plusHandler = () => {
    setAmount(amount + 10);
  };

  const minusHandler = () => {
    setAmount(amount - 10);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button>
    </Card>
  );
}

export default ExpenseItem;
