import React, { useContext, useState } from "react";
import { TransactionContext } from "./ContextAPi";

const Child = () => {
  let { transactions, addTransaction } = useContext(TransactionContext);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const additionHandler = e => {
    e.preventDefault();
    addTransaction({
      amount: amount,
      desc: desc
    });
  };

  console.log(transactions);
  return (
    <div className="container">
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <p>Your Balance</p>
      <h3>$260.00</h3>
      <div className="income-expense">
        <p>
          Income
          <br />
          <span id="income">$500.00</span>
        </p>
        <p>
          Expense <br />
          <span id="expense">$500.00</span>
        </p>
      </div>
      <br />
      <ul className="transaction-history">
        <h4>History</h4> <hr />
        {transactions.map((transaction, id) => {
          return (
            <li key={id}>
              <span>{transaction.desc}</span>
              <span>{transaction.amount}</span>
            </li>
          );
        })}
      </ul>
      <form className="form-control" onSubmit={additionHandler}>
        <label>Text</label>
        <input
          type="text"
          onChange={e => setDesc(e.target.value)}
          placeholder="Enter Purpose of payment"
          required
        />
        <label>
          Amount <br /> (Negative - expense)(positive + income){" "}
        </label>
        <input
          type="number"
          placeholder="Enter Amount"
          onChange={e => setAmount(e.target.value)}
          required
        />
        <input type="submit" value="Add Transactions" className="btn" />
      </form>
    </div>
  );
};

export default Child;
