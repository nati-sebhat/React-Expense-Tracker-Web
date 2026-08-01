function Search({searchTerm, onSearchChange}){
    return(
  <>
    <input 
    type="text" 
    placeholder="Search by description"
    value={searchTerm}
    onChange={onSearchChange}
    />
  </>
    );
}

export default Search;