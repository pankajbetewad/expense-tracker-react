import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 } from "uuid";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: v4(),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={handleSubmit}>
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
