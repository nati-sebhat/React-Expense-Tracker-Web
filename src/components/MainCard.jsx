function MainCard({transactions}){
  const totalIncome = transactions.reduce((total, transaction) => {
    if(transaction.type === "income"){
      return total + Number(transaction.amount);
    }
    return total;
  }, 0);

  const totalExpenses = transactions.reduce((total, transaction) => {
    if(transaction.type === "expense"){
      return total + Number(transaction.amount);
    }
    return total;
  }, 0);

  const balance = totalIncome - totalExpenses ;

  

    return(
  <>
  <div className="bg-white rounded-lg shadow p-6 text-center space-y-4 dark:bg-slate-950">


    <div>
      <p className="text-sm text-gray-500 dark:text-slate-100">Balance</p>
      <p className={`text-6xl font-bold  ${balance < 0 ? "text-red-600" : "text-green-600"}`}>${balance}</p>
    </div>

<div className="flex justify-around">
    <div>
      <p className="text-sm text-gray-500 dark:text-slate-100">Income</p>
      <p className="text-3xl font-semibold text-green-600">${totalIncome}</p>
    </div>

    <div>
      <p  className="text-sm text-gray-500 dark:text-slate-100">Expense</p>
      <p className="text-3xl font-semibold text-red-600">${totalExpenses}</p>
    </div>

  </div>  


  </div>
  
  
  

  </>
    );
}
export default MainCard;