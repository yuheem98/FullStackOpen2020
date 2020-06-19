import React from 'react'
import Course from './components/Course'

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

const App = ({ courses }) => {
  return ( 
    <div>
      <Curriculum courses={courses} />
    </div>
  )
}

export default App

