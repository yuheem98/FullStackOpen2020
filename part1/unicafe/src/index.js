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

const Statistic = ({ text, value}) => (  
  <p>{text} {value}</p>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100 + ' %'
  
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <Statistic text='good' value={good} />
      <Statistic text='neutral' value={neutral} />
      <Statistic text='bad' value={bad} />
      <Statistic text='all' value={total} />
      <Statistic text='average' value={average} />
      <Statistic text='positive' value={positive} />
    </div>
  )
}

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
  
  return (
    <div>
      <Header text='Give Feedback' />
      <FeedbackButton handleClick={handleButtonType} type='good' />
      <FeedbackButton handleClick={handleButtonType} type='neutral' />
      <FeedbackButton handleClick={handleButtonType} type='bad' />
      <Header text='Statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
