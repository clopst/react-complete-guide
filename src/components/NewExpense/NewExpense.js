import { useState } from 'react';
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

export const NewExpense = (props) => {
  const { onNewExpense } = props;

  const [visible, setVisible] = useState(false);

  const handleSubmit = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };

    onNewExpense(expense);
  };

  const handleVisibleClick = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="new-expense">
      {visible ? (
        <ExpenseForm onSubmit={handleSubmit} onCancel={handleCancel} />
      ) : (
        <button onClick={handleVisibleClick}>Add New Expense</button>
      )}
    </div>
  );
};
