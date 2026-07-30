import MainCard from "./components/MainCard"; 
import Search from "./components/Search";
import Filter from "./components/Filter";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import { useState } from "react";




function App() {
  const [transactions, setTransactions] = useState([]);

  function handleAddTransaction(newTransactions){
     const transactionWithId = {...newTransactions, id:Date.now()};
    setTransactions([...transactions, transactionWithId]);
    console.log(transactions);
  }

  function handleDeleteTransaction(id){
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  }

  return (
    <>
    <nav className="flex justify-between items-center   bg-gray-800 px-6 py-4 text-white ">
        <h2 className="text-xl font-bold">💸 Expensiya</h2>
        <button className="bg-gray-600 rounded-lg px-4 py-2 hover:bg-gray-500">🌙 Dark Mode</button>
    </nav>
    <div className="mx-auto p-6 max-w-2xl bg-gray-100 min-h-screen ">
    <MainCard transactions={transactions}/>
    <div className=" flex gap-4">
      <Search/>
      <Filter/>
    </div>
    <AddTransaction onAddTransaction={handleAddTransaction}/>
    <TransactionList transactions={transactions} onDeleteTransaction={handleDeleteTransaction}  />
    </div>
    </>
  );
}

export default App;