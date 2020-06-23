import React from 'react'

const Search = ({ searchFilter, setSearchFilter }) => {
  const handleSearch = (event) => setSearchFilter(event.target.value)
  return (
    <div>
      Find countries{' '}
      <input 
        value={searchFilter} 
        onChange={handleSearch} 
      />
    </div>
  )
}

export default Search
