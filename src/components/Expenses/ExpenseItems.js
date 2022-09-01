import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  let [title, setTitle] = useState(props.title);
  const expansePrice = props.amount;

  const onClickHandler = () => {
    setTitle("updated");
    console.log(title);
  };
  return (
    <Card className="expanse">
      <ExpenseDate date={props.date} />
      <div className="expanse__info">
        <h2>{title}</h2>
        <div className="expense__price">{expansePrice}</div>
      </div>
      <button onClick={onClickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItems;
