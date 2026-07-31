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

  console.log("Expense" + totalExpenses);
  console.log("Income" +totalIncome);
  console.log("Balance" + balance);

    return(
  <>
  <h1>Balance : {balance}</h1>
  <h1>Total Income : {totalIncome}</h1>
  <h1>Total Expense : {totalExpenses}</h1>

  </>
    );
}
export default MainCard;