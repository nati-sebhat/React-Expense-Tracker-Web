function Search({searchTerm, onSearchChange}){
    return(
  <>
    <input 
    type="text" 
    placeholder="Search by description"
    value={searchTerm}
    onChange={onSearchChange}
    className="flex-1 border rounded-lg p-2 m-3"
    />
  </>
    );
}

export default Search;