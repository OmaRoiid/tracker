import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {
  const expanseTitle = props.title;
  const expansePrice = props.amount;
  return (
    <div className="expanse">
      <ExpenseDate date={props.date} />
      <div className="expanse__info">
        <h2>{expanseTitle}</h2>
        <div className="expense__price">{expansePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
