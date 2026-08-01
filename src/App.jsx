import MainCard from "./components/MainCard"; 
import Search from "./components/Search";
import Filter from "./components/Filter";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import {useState } from "react";




function App() {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

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
    console.log(transactions);
  }

  function handleFilterChange(e){
    setFilterCategory(e.target.value);
  }
  function handleCancelEdit(){
    setEditTransaction(null);
  }

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
    <>
    <nav className="flex justify-between items-center   bg-gray-800 px-6 py-4 text-white ">
        <h2 className="text-xl font-bold">💸 Expensiya</h2>
        <button className="bg-gray-600 rounded-lg px-4 py-2 hover:bg-gray-500">🌙 Dark Mode</button>
    </nav>
    <div className="mx-auto p-6 max-w-2xl bg-gray-100 min-h-screen space-y-6 ">
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
    </>
  );
}

export default App;