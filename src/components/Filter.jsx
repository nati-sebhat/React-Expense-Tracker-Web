import {categories} from "../constants";

function Filter({filterCategory, onFilterChange}){
    return(
        <>
           <select value={filterCategory} onChange={onFilterChange}>
            <option value="All">All</option>
            {categories.map((cat) => (
                <option value={cat} key={cat}>{cat}</option>
            ))}

           </select>
        </>

    );
}

export default Filter;