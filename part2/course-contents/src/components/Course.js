import React from 'react'

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

export default Course
