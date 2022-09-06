import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilteredYear] = useState("2020");
  const onFilterChangedHandler = (changedDate) => {
    setFilteredYear(changedDate);
  };

  const filteredExpenses = props.items.filter(
    (expanse) => expanse.date.getFullYear().toString() === filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChanged={onFilterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
