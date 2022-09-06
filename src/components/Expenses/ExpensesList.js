import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((filteredExpense) => (
        <ExpenseItems
          key={filteredExpense.id}
          title={filteredExpense.title}
          amount={filteredExpense.amount}
          date={filteredExpense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
