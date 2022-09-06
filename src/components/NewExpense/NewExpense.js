import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const onSaveNewExpenseHandler = (enteredExpanseData) => {
    const expanseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expanseData);
    setNewExpenseFlag(false);
  };

  let [NewExpenseFlag, setNewExpenseFlag] = useState(false);

  const onCancelClickedHandler = () => {
    setNewExpenseFlag((prevExpenseFlag) => {
      return (NewExpenseFlag = !prevExpenseFlag);
    });
  };

  const onAddNewExpense = () => {
    setNewExpenseFlag((prevExpenseFlag) => {
      return (NewExpenseFlag = !prevExpenseFlag);
    });
  };
  if (!NewExpenseFlag) {
    return (
      <div className="new-expense">
        <button onClick={onAddNewExpense}>Add New Expense</button>;
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        onCancel={onCancelClickedHandler}
        onSaveNewExpense={onSaveNewExpenseHandler}
      />
    </div>
  );
};

export default NewExpense;
