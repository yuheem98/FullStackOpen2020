import React from 'react'

const ShowCountry = ({ country, setSearchFilter }) => {
  const showHandler = () => setSearchFilter(country.name)
  return (
    <button onClick={showHandler}>Show</button>
  )
}

export default ShowCountry
