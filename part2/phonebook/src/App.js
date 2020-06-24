import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.reduce((acc, person) => 
      acc || person.name === newName, false)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(res => {
          setPersons(persons.concat(res.data))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handeNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setNewFilter(event.target.value)
  
  const personsToShow = newFilter 
    ? persons.filter(person => 
      person.name.toLowerCase().includes(newFilter.toLowerCase()))
    : persons

  return (
    <div>
      <h1>Phonebook</h1>
        <Filter filter={newFilter} filterHandler={handleFilterChange} />
      <h2>Add a new entry</h2>
        <PersonForm
          personHandler={addPerson}
          name={newName}
          nameHandler={handleNameChange}
          number={newNumber}
          numberHandler={handeNumberChange}
        />
      <h2>Numbers</h2>
        <Persons persons={personsToShow} />
    </div>
  )
}

export default App

