import React from "react";
import Child from "./Child";
import { TransactionProvider } from "./ContextAPi";
import "./style.css";

export default function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}
