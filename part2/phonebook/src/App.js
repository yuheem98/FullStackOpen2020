import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ newMessage, setNewMessage ] = useState('')
  const [ successful, setSuccessful ] = useState(false)
  
  useEffect(() => {
    personService
      .getAll()
      .then(initalPersons => {
        setPersons(initalPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.reduce((acc, person) => 
      acc || person.name === newName, false)) {
      const message =
        `${newName} is already added to phonebook, 
        replace the old number with a new one?`

      if (window.confirm(message)) {
        const person = persons.find(person => person.name === newName)
        const id = person.id
        const updatedPerson = { ...person, number: newNumber }

        personService
          .update(id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => 
              person.id !== id ? person : returnedPerson))
            setSuccessful(true)
            setNewMessage(`Added ${person.name}`)
            setTimeout(() => {
              setNewMessage('')
            }, 5000)
          })
          .catch(error => {
            setNewMessage(
              `Information of ${newName} has already been removed from server`
            )
            setTimeout(() => {
              setNewMessage('')
            }, 5000)
          })
      }

    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }

      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setSuccessful(true)
          setNewMessage(`Added ${newName}`)
          setNewName('')
          setNewNumber('')
          setTimeout(() => {
            setNewMessage('')
          }, 5000)
        }) 
    }
  }
  
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService
        .remove(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }
    

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setNewFilter(event.target.value)
  
  const personsToShow = newFilter 
    ? persons.filter(person => 
      person.name.toLowerCase().includes(newFilter.toLowerCase()))
    : persons

  return (
    <div>
      <h1>Phonebook</h1>
        <Notification message={newMessage} successful={successful} />
        <Filter filter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add a new entry</h2>
        <PersonForm
          handleSubmit={addPerson}
          name={newName}
          handleNameChange={handleNameChange}
          number={newNumber}
          handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
        <Persons persons={personsToShow} handleDelete={deletePerson} />
    </div>
  )
}

export default App

