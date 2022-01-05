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
  console.log(filterYear);

  return (
    <Card className="expenses">
      <ExpensesFilter value={filterYear} onChange={handleFilterChange} />
      {items.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
};
