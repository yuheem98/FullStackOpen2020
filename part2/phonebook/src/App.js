import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    {name: 'Arto Hellas', number: '040-1234567'},
    {name: 'Ada Lovelace', number: '39-44-5323523' },
    {name: 'Dan Abramov', number: '12-43-234345'},
    {name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.reduce((acc, person) => 
      acc || person.name === newName, false)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
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

