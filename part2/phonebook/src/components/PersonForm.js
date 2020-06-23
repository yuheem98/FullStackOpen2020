import React from 'react' 

const PersonForm = ({ personHandler, 
                      name, 
                      nameHandler,
                      number, 
                      numberHandler }) => (
  <form onSubmit={personHandler}>
    <div>
      Name:<input value={name} onChange={nameHandler} />
    </div>
    <div>
      Number:<input value={number} onChange={numberHandler} />
    </div>
  </form>
)

export default PersonForm