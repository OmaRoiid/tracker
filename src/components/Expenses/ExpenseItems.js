import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

const ExpenseItems = (props) => {
  return (
    <li>
      <Card className="expanse">
        <ExpenseDate date={props.date} />
        <div className="expanse__info">
          <h2>{props.title}</h2>
          <div className="expense__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItems;
