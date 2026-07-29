function TransactionList({transactions}){
    return(
        
        <ul>
           {transactions.map((transaction) => (
            <li key={transaction.id}>
      <span>{transaction.description}</span>
      <span>{transaction.amount}</span>
      <span>{transaction.category}</span>
      <span>{transaction.type}</span>
    </li>
    ))}
        </ul>
      
    );
    
}

export default TransactionList;