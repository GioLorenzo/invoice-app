import React, {useState} from 'react'

const Dropdown = ({classList}) => {
  const [dropdown, setDropdown] = useState('Net 30 Days');
  return (
    <form>
      <h4>Payment Terms</h4>
      <select value={dropdown} onChange={ e => {setDropdown(e.target.value)} }>
        <option value="Net 1 Day">Net 1 Day</option>
        <option value="Net 7 Day">Net 7 Day</option>
        <option value="Net 14 Day">Net 14 Day</option>
        <option value="Net 30 Day">Net 30 Day</option>
      </select>
    </form>
  )
}

export default Dropdown
