function TransactionList({transactions}){
    return(
        
        <ul className="border border-lg m-3 p-3">
           {transactions.map((transaction) => (
            <li key={transaction.id} className = "flex gap-4 border border-lg" >
      <span>{transaction.description}</span>
      <span className = {`${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}>{transaction.amount}</span>
      <span>{transaction.category}</span>
      <span className = {`${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}>{transaction.type}</span>
    </li>
    
    ))}
        </ul>
      
    );
    
}

export default TransactionList;