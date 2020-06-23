import React, { useState } from 'react'
import Search from './components/Search'
import Display from './components/Display'

function App() {
  const [ searchFilter, setSearchFilter ] = useState('')

  return (
    <div>
      <Search
        searchFilter={searchFilter} 
        setSearchFilter={setSearchFilter} 
      />
      <Display 
        searchFilter={searchFilter} 
        setSearchFilter={setSearchFilter} 
      />
    </div>
  )
}

export default App;
