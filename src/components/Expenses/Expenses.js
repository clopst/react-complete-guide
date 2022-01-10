import { useState } from 'react';
import { Card } from '../UI/Card';
import { ExpensesFilter } from './ExpensesFilter';
import { ExpensesList } from './ExpensesList';
import './Expenses.css';
import { ExpensesChart } from './ExpensesChart';

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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
