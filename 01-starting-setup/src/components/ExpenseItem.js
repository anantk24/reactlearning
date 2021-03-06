import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const onClickHandler = () => {
    setTitle("Updated");
    console.log("clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={onClickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
