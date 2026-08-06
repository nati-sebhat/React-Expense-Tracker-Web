function Search({searchTerm, onSearchChange}){
    return(
  <div className="  dark:border-slate-600">
    <input 
    type="text" 
    placeholder="Search by description"
    value={searchTerm}
    onChange={onSearchChange}
    className="flex-1 border rounded-lg p-2 m-3 dark:bg-gray-800 dark:border-slate-600 dark:text-slate-100"
    />
  </div>
    );
}

export default Search;