function TransactionList({transactions, onDeleteTransaction}){
    return(
        
        <ul className="border border-lg m-3 p-3">
           {transactions.map((transaction) => (
            <li key={transaction.id} className = "flex gap-4 border border-lg" >
      <span>{transaction.description}
        
      </span>
      <span className = {`${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}>{transaction.amount}</span>
      <span>{transaction.category}</span>
      <span className = {`${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}>{transaction.type}</span>
      <button onClick={() =>  {
        const confirmed = window.confirm("Are you sure you want to delete?");
        if(confirmed){
onDeleteTransaction(transaction.id)}
      }}
      
        >
            ❌
            </button>
    </li>
    
    ))}
        </ul>
      
    );
    
}

export default TransactionList;