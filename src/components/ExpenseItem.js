import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';

export const ExpenseItem = (props) => {
  const { title, amount, date } = props;

  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};
