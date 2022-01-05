import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

export const NewExpense = (props) => {
  const { onNewExpense } = props;

  const handleSubmit = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };

    onNewExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={handleSubmit} />
    </div>
  );
};
