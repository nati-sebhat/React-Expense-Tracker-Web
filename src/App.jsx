import './index.css';
import MainCard from "./components/MainCard"; 

import Search from "./components/Search";
import Filter from "./components/Filter";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import {useEffect, useState } from "react";




function App() {
  
  const [editTransaction, setEditTransaction] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions, setTransactions] = useState(() => {
     const saved = localStorage.getItem("transactions");
     try{
       return saved ? JSON.parse(saved) : [];
     }
     catch(error){
      console.error("Failed to load saved transactions:", error);
      return [];
     }
     
  });

  const [darkMode, setDarkMode] = useState(() => {
    
    return localStorage.getItem("darkMode") === "true";

  });

  function toggleDarkMode(){
        setDarkMode(!darkMode);
      }

      useEffect(() => {
        localStorage.setItem("darkMode", darkMode);

      }, [darkMode]);

  function handleUpdateTransaction(updatedTransaction){
    setTransactions(
      transactions.map((transaction) => 
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      )
      
    );
setEditTransaction(null);
  }
  function handleEditClick(updatedTransaction) {
    setEditTransaction(updatedTransaction);
  }

  function handleAddTransaction(newTransactions){
     const transactionWithId = {...newTransactions, id:Date.now()};
    setTransactions([...transactions, transactionWithId]);
    
  }

  function handleFilterChange(e){
    setFilterCategory(e.target.value);
  }
  function handleCancelEdit(){
    setEditTransaction(null);
  }

  useEffect(() => {
      localStorage.setItem("transactions", JSON.stringify(transactions));

  }, [transactions]);

  function handleDeleteTransaction(id){
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  }

  function handleSearchChange(e){
    setSearchTerm(e.target.value);

  }

  

  const filteredTransactions = transactions.filter((transaction) =>
  {
      const matchesCategory = filterCategory === "All" ? true : transaction.category === filterCategory;
      const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;

  }
      
  )
  

  return (
    <div className={darkMode ? "dark" : ""}>

    <nav className="flex justify-between items-center   bg-slate-950 px-6 py-4 text-white dark:bg-slate-800 dark-text-slate-300 ">
        <h2 className="text-xl font-bold">💸 Expensiya</h2>
        <button className="bg-gray-600 rounded-lg px-4 py-2 hover:bg-gray-500" onClick={toggleDarkMode}>{ darkMode ? "☀️ Light Mode"   :"🌙 Dark Mode"}</button>
    </nav>
    <div className="mx-auto p-6 max-w-2xl bg-gray-100 min-h-screen space-y-6 dark:bg-slate-950 dark:border-slate-600">
    <MainCard transactions={transactions}/>
    <div className=" flex gap-4">
      <Search
       searchTerm={searchTerm}
       onSearchChange={handleSearchChange}
      />
      <Filter 
      filterCategory={filterCategory}
      onFilterChange={handleFilterChange}
      />
    </div>
    <AddTransaction 
    onAddTransaction={handleAddTransaction} 
    editTransaction={editTransaction} 
    onUpdateTransaction={handleUpdateTransaction}
    onCancelEdit={handleCancelEdit}
     />
    <TransactionList
     transactions={filteredTransactions} 
     onDeleteTransaction={handleDeleteTransaction} 
     onEditTransaction={handleEditClick}  />
    </div>
    </div>
  );
}

export default App;