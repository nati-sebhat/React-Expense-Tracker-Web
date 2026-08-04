import { useState, useEffect } from "react";
import {categories} from "../constants";


function AddTransaction({ onAddTransaction, editTransaction, onUpdateTransaction, onCancelEdit }){
    const [formData, setFormData] = useState({
  description: "",
  amount:"",
  category:"",
  type:"expense",
});
useEffect(() => {
    if(editTransaction){
        setFormData(editTransaction)
    }
}, [editTransaction])

function handleChange(e){
    const {name, value} = e.target;
    setFormData({...formData, [name] : value});
}

function handleSubmit(e){
    e.preventDefault();
    if(formData.description.trim() === "" || Number(formData.amount) <= 0){
        alert("Give a correct Input!");
        return;
    }

    if(editTransaction){
        onUpdateTransaction(formData);
      
    }else{
        onAddTransaction(formData);
    }
    

    setFormData({
        description: "",
        amount: "",
        category: "",
        type: "expense",

    });

    

}

function handleCancelEdit(){
    setFormData({
        description: "",
        amount: "",
        category: "",
        type: "expense",

    });
    onCancelEdit();
}
return(
    <div className="dark:bg-slate-950">
    <form 
    onSubmit={handleSubmit} 
    className="max-w-md mx-auto m-5 p-6 bg-white rounded-lg shadow space-y-4 w-full border dark:border-slate-600 dark:bg-slate-950">
<input 
name="description" 
value={formData.description} 
onChange={handleChange}  
placeholder="Enter description"
className="w-full border rounded-lg p-2 dark:text-slate-100 dark:bg-slate-700"/>
<input 
name="amount" 
value={formData.amount} 
onChange={handleChange} 
type="number" 
placeholder="amount"
className="w-full border rounded-lg p-2 dark:text-slate-100 dark:bg-slate-700"/>
<select name="type" value={formData.type} onChange={handleChange}
className="w-full border rounded-lg p-2 dark:bg-slate-700 dark:text-slate-100">
    <option value="expense" >Expense</option>
    <option value="income">Income</option>
</select>
<select name="category" value={formData.category} onChange={handleChange}
className="w-full border rounded-lg p-2 dark:text-slate-100 dark:bg-slate-700">
  {categories.map((cat) => (
    <option value={cat} key={cat}>
     {cat}
    </option>
  ))}
</select>


<div className="flex justify-between">
    <button type="submit" className="bg-gray-600 hover:bg-gray-500 rounded-lg px-4 py-2 dark:text-slate-100 dark:bg-slate-700 dark:hover:bg-slate-800">
        {editTransaction ? "Update" : "Submit"}
    </button>
 
 {editTransaction && (<button type="button" onClick={handleCancelEdit} className="text-lg hover:bg-gray-300 rounded-lg px-4 py-2 dark:bg-slate-700 dark:hover:bg-slate-800">❌</button>)}
</div>


</form>
    </div>
);


}

export default AddTransaction;