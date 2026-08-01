import {categories} from "../constants";

function Filter({filterCategory, onFilterChange}){
    return(
        <>
           <select value={filterCategory} onChange={onFilterChange} className="border rounded-lg p-2 m-3">
            <option value="All">All</option>
            {categories.map((cat) => (
                <option value={cat} key={cat}>{cat}</option>
            ))}

           </select>
        </>

    );
}

export default Filter;