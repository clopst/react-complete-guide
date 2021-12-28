import { Expenses } from './components/Expenses/Expenses';

export const App = () => {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 291.41,
      date: new Date(2021, 11, 21),
    },
    {
      title: 'New TV',
      amount: 311.41,
      date: new Date(2021, 11, 16),
    },
    {
      title: 'Wooden Desk',
      amount: 451.42,
      date: new Date(2021, 10, 29),
    },
  ];

  return (
    <div>
      <h2>Lets Get Started</h2>
      <Expenses items={expenses} />
    </div>
  );
};
