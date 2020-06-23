import React from 'react'
import Weather from './Weather'

const Country = ({ country }) => (
  <div>
    <h1>{country.name}</h1>
    <div>Capital {country.capital}</div>
    <div>Population {country.population}</div>
    <h2>Spoken languages</h2>
    <ul>
      {country.languages.map(language =>
      <li key={language.name}>{language.name}</li>
      )}
    </ul>
    <img 
      src={country.flag} 
      alt={country.name + ' flag'} 
      height="100" 
    />
    <Weather city={country.capital} />
  </div>
)

export default Country
