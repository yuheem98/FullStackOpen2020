import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundementals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  } 
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content p1={part1.name} p2={part2.name} p3={part3.name} 
        ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
      <Total ex1={part1.exercises} ex2={part3.exercises} ex3={part3.exercises} />
    </>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.p1} exercises={props.ex1} />
      <Part name={props.p2} exercises={props.ex2} />
      <Part name={props.p3} exercises={props.ex3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </div>
  )
}
        
ReactDOM.render(<App />, document.getElementById('root'))
