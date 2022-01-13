import { ExpenseItem } from './ExpenseItem';
import './ExpensesList.css';

export const ExpensesList = (props) => {
  const { items } = props;

  return items.length > 0 ? (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  ) : (
    <h2 className="expenses-list__fallback">No expenses found.</h2>
  );
};
