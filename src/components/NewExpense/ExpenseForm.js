import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = () => {
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');

  const [values, setValues] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const handleTitleChange = (event) => {
    // setValues({
    //   ...values,
    //   title: event.target.value,
    // });

    setValues((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const handleAmountChange = (event) => {
    // setValues({
    //   ...values,
    //   amount: event.target.value,
    // });

    setValues((prevState) => ({
      ...prevState,
      amount: event.target.value,
    }));
  };

  const handleDateChange = (event) => {
    // setValues({
    //   ...values,
    //   date: event.target.value,
    // });

    setValues((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseItem = {
      ...values,
      date: new Date(values.date),
    };
    console.log(expenseItem);

    // clear state
    setValues({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={values.title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={values.amount}
            min={0.01}
            step={0.01}
            onChange={handleAmountChange}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={values.date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleDateChange}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
