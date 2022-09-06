import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const expanseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveNewExpense(expanseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  const onTitleChangedHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const onAmountChangedHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const onDateChangedHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };
  const onCancelClicked = () => {
    props.onCancel();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={onTitleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={onAmountChangedHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={onDateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add New Expense</button>
        <button onClick={onCancelClicked}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
