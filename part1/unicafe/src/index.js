import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => (
  <h1>{text}</h1>
)

const FeedbackButton = ({ handleClick, type }) => (
  <button onClick={handleClick(type)}>
    {type}
  </button>
)

const App = () => {
  //save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleButtonType = (type) => () => {
    if (type === 'good') { setGood(good + 1) }
    if (type === 'neutral') { setNeutral(neutral + 1) }
    if (type === 'bad') { setBad(bad + 1) }
  }
  
  const total = good + neutral + bad

  const average = total === 0 ? 0 : (good - bad) / total

  const positive = total === 0 ? 0 : good / total * 100

  return (
    <div>
      <Header text='Give Feedback' />
      <FeedbackButton handleClick={handleButtonType} type='good' />
      <FeedbackButton handleClick={handleButtonType} type='neutral' />
      <FeedbackButton handleClick={handleButtonType} type='bad' />
      <Header text='Statistics' />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
