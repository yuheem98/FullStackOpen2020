import React from 'react'

const Notification = ({ message, successful}) => {
  const style = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  if (message === '') {
    return null
  }

  if (successful) {
    style.color = 'green'
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification
