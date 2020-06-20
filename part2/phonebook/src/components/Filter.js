import React from 'react'

const Filter = ({ filter, filterHandler }) => (
  <div>
    Filter shown with
    <input value={filter} onChange={filterHandler} />
  </div>
)

export default Filter
