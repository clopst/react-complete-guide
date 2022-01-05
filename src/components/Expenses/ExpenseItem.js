import { useState } from "react";
import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  const { title, amount, date } = props;

  const [expenseTitle, setExpenseTitle] = useState(title);

  const handleClick = () => {
    setExpenseTitle("New title");
    console.log("CLICK!!!");
  };

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item_description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};
