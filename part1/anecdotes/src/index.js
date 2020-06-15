import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  
  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const setSelectedValue = (min, max) => () => {
    const randomInt = getRandomInt(min, max)
    setSelected(randomInt)
  }

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <Button handleClick={setSelectedValue(0, 5)} 
        text='Next anecdote' />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of ' +
  'the development time...The remaining 10 percent of the code accounts ' +
  'for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers ' +
  'write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. ' +
  'Therefore, if you write the code as cleverly as possible, you are, by ' +
  'definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

