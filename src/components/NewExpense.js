import { useState } from "react";
import "./NewExpense.css";

const NewExpense = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const saveExpense = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      price: "",
      date: new Date(),
    };

    console.log("Your inputs are saved", expenseData);
    return expenseData;
  };

  return (
    <div className="new-expense">
      <form onSubmit={saveExpense}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" onChange={dateHandler} />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input type="number" onChange={priceHandler} />
          </div>
          <div className="new-expense__actions">
            <button>Cancel</button>
            <button type="submit">Add new expense</button>
          </div>
        </div>
      </form>
      <h1>title: {title}</h1>
      <h1>date: {date}</h1>
      <h1>price: {price}</h1>
    </div>
  );
};

export default NewExpense;
