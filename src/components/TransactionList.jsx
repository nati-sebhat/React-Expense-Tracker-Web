function TransactionList({transactions, onDeleteTransaction, onEditTransaction}){
    return(
        
        <ul className="bg-white rounded-lg p-4 shadow dark:bg-slate-950 dark:text-slate-100 dark:shadow dark:border-slate-600 ">
           {transactions.map((transaction) => (
            <li key={transaction.id} className = "flex gap-4  p-2" >
                <div className=" flex-col w-full">
                   <span className="text-2xl font-bold">{transaction.description}
        
      </span>
      <div className="flex gap-7">

            <span className = {`${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}> ${transaction.amount} </span>
            <span >{transaction.category} </span>
            <span className = {`${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}>{transaction.type}</span> 
            
      </div>
      
                </div>


                 <button onClick={() => onEditTransaction(transaction)}
                className="hover:bg-gray-300 rounded-lg px-2 py-2 cursor-pointer">✏️</button>
      
      <button onClick={() =>  {
        const confirmed = window.confirm("Are you sure you want to delete?");
        if(confirmed){
onDeleteTransaction(transaction.id)}
      }}
      className="hover:bg-gray-300 rounded-lg px-2 py-2 cursor-pointer"
        >
            🗑️
            </button>

           
    </li>
    
    ))}
        </ul>
      
    );
    
}

export default TransactionList;