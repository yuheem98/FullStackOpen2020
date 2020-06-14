import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
<<<<<<< HEAD
  const parts = [
    {
      name: 'Fundementals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    }, 
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
=======
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
>>>>>>> ff9df5607fc3830f2448d63453ad2a9f9093dfa4

  return (
    <>
      <Header course={course} />
<<<<<<< HEAD
      <Content parts={parts} />
      <Total parts={parts} />
=======
      <Content p1={part1.name} p2={part2.name} p3={part3.name} 
        ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
      <Total ex1={part1.exercises} ex2={part3.exercises} ex3={part3.exercises} />
>>>>>>> ff9df5607fc3830f2448d63453ad2a9f9093dfa4
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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.parts[0].exercises + 
        props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}
        
ReactDOM.render(<App />, document.getElementById('root'))
