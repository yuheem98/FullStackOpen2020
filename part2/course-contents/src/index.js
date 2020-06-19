import React from 'react';
import ReactDOM from 'react-dom';

const CourseHeader = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part =>
        <Part key={part.id} part={course.parts[part.id - 1]} />
      )}
    </div>
  )
}

const Total = ({ course }) => {
  const total = course.parts.reduce((s, p) => 
    s + p.exercises, 0)
  return(
    <p>
      <strong> Total of {total} exercise</strong>
    </p>
  ) 
}

const Course = ({ course }) => {
  return (
    <div>
      <CourseHeader course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Curriculum = ({ courses }) => { 
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
      <Course key={course.id} course={course} />
      )} 
    </div>
    )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of eact',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        { name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewars',
          exercises: 7,
          id:2
        }
      ]
    }
  ] 
  return <Curriculum courses={courses} />
}

ReactDOM.render(<App />, document.getElementById('root'))
