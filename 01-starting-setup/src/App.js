import { useState } from 'react';
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: '1',
    title: 'Car Insurance',
    amount: 291.41,
    date: new Date(2021, 11, 21),
  },
  {
    id: '2',
    title: 'New TV',
    amount: 311.41,
    date: new Date(2021, 11, 16),
  },
  {
    id: '3',
    title: 'Wooden Desk',
    amount: 451.42,
    date: new Date(2021, 10, 29),
  },
];

export const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const handleNewExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onNewExpense={handleNewExpense} />
      <Expenses items={expenses} />
    </div>
  );
};
