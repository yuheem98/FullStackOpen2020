import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FilterCountries = ({ filter, filterHandler }) => (
  <div>
    Find countries
    <input value={filter} onChange={filterHandler} />
    <br />
  </div>
)

const Country = ({ country }) => (
  <div>
    {country.name}
    <br />
  </div>
)

const FullCountry = ({ country }) => (
  <div>
    <h1>{country.name}</h1>
    <p>
      Capital {country.capital}
      <br />
      Population {country.population}
    </p>
    <h2>Languages</h2>
    <ul>
      {country.languages.map(language =>
      <li key={language.name}>{language.name}</li>
      )}
    </ul>
    <img src={country.flag} alt={country.name + ' flag'}
      width="200" height="200" />
  </div>
)
      

const ShowCountries = ({ countries }) => {
  if (countries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else if (countries.length > 1) {
    return (
      <div>
        {countries.map(country =>
        <Country key={country.name} country={country} />
        )}
      </div>
    )
  } else {
    return (
      <div>
        {countries.map(country =>
        <FullCountry key={country.name} country={country} />
        )}
      </div>
    )
  }
}

function App() {
  const [ countries, setCountries ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => setNewFilter(event.target.value)

  const countriesToShow = newFilter
    ? countries.filter(country =>
      country.name.toLowerCase().includes(newFilter.toLowerCase()))
    : countries

  return (
    <div>
      <FilterCountries filter={newFilter} filterHandler={handleFilterChange} />
      <ShowCountries countries={countriesToShow} />
    </div>
  )
}

export default App;
