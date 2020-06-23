import React from 'react'
import ShowCountry from './ShowCountry'

const CountryList = ({ countries, setSearchFilter }) => {
  return (
    countries.map(country =>
      <div key={country.name}>
        {country.name}{' '}
        <ShowCountry 
          country={country} 
          setSearchFilter={setSearchFilter} 
        />
      </div>)
  )
}

export default CountryList
