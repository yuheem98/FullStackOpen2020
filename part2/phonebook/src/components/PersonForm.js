import React from 'react' 

const PersonForm = ({ handleSubmit,
                      name, 
                      handleNameChange,
                      number, 
                      handleNumberChange }) => (
  <form onSubmit={handleSubmit}>
    <div>
      Name:<input value={name} onChange={handleNameChange} />
    </div>
    <div>
      Number:<input value={number} onChange={handleNumberChange} />
    </div>
    <div>
      <button type='submit'>add</button>
    </div>
  </form>
)

export default PersonForm
