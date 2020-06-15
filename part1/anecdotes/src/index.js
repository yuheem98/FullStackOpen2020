import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => (
  <h1>{text}</h1>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MostVotes = ({votes}) => {
  if (votes.every(v => v === 0)) {
    return (
      <p>No voted anecdotes.</p>
    )
  }
  
  const maxVotes = Math.max(...votes)
  const mostVoted = votes.indexOf(maxVotes)
  
  return (
    <p>
      {anecdotes[mostVoted]}
      <br />
      has {maxVotes}
    </p>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const handleNextClick = () => {
    const randomInt = getRandomInt(0, anecdotes.length - 1)
    setSelected(randomInt)
  }
  
  const handleVoteClick = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }
  
  return (
    <div>
      <Header text='Anecdote of the day' />
      <p>{props.anecdotes[selected]}<br /> has {votes[selected]} votes</p>
      <Button handleClick={handleVoteClick}
        text='Vote' />
      <Button handleClick={handleNextClick} 
        text='Next anecdote' />
      <Header text='Anecdote with most votes' />
      <MostVotes votes={votes} />
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

