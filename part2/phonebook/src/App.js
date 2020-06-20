import React, { useState } from 'react'

const Person = ({ person }) => {
  return (
    <div>
      {person.name} {person.number} <br />
    </div>
  )
}
const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map(person =>
      <Person key={person.name} person={person} />
      )}
    </div>
  )
}

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
      <h2>Phonebook</h2>
        <div>
          Filter shown with 
          <input value={newFilter} onChange={handleFilterChange} />
        </div>
      <h2>Add a new entry</h2>
      <form onSubmit={addPerson}>
        <div>
          Name:<input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number:<input value={newNumber} onChange={handeNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <Persons persons={personsToShow} />
    </div>
  )
}

export default App

