import './Expenses.css';
import { ExpenseItem } from './ExpenseItem';
import { Card } from '../UI/Card';
import { ExpensesFilter } from './ExpensesFilter';
import { useState } from 'react';

export const Expenses = (props) => {
  const { items } = props;

  const [filterYear, setFilterYear] = useState('2021');

  const handleFilterChange = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter value={filterYear} onChange={handleFilterChange} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
