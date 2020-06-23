import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './Country'
import CountryList from './CountryList'

const Display = ({ searchFilter, setSearchFilter }) => {
  const [ countries, setCountries ] = useState([])
  
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        setCountries(res.data)
      })
  }, [])

  const countriesToShow = searchFilter
    ? countries.filter(country => 
        country.name.toLowerCase().includes(searchFilter.toLowerCase()))
    : countries
  
  if (countriesToShow.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else if (countriesToShow.length === 1) {
    return (
      <div>
        <Country country={countriesToShow[0]} />
      </div>
    )
  } else {
    return (
      <CountryList 
        countries={countriesToShow} 
        setSearchFilter={setSearchFilter}
      />
    )
  } 
}

export default Display
