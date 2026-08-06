import {categories} from "../constants";

function Filter({filterCategory, onFilterChange}){
    return(
        <div>
           <select value={filterCategory} onChange={onFilterChange} className="border rounded-lg p-2 m-3 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-100">
            <option value="All" className="dark:bg-slate-700">All</option>
            {categories.map((cat) => (
                <option value={cat} key={cat} className="dark:bg-slate-700">{cat}</option>
            ))}

           </select>
        </div>

    );
}

export default Filter;