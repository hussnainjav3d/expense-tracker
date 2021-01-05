import React, { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";
const initTransactions = [
  { amount: 550, desc: "Cash" },
  { amount: 115, desc: "Load" },
  { amount: 240, desc: "Pay for drink" },
  { amount: -400, desc: "Pay for Lunch" }
];

export const TransactionContext = createContext(initTransactions);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initTransactions);
  const addTransaction = transOBJ => {
    dispatch({
      type: "ADD",
      payload: {
        amount: transOBJ.amount,
        desc: transOBJ.desc
      }
    });
  };
  return (
    <TransactionContext.Provider
      value={{ transactions: state, addTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
