import React, {useState} from 'react'

const Dropdown = ({classList, text, option1, option2, option3, option4}) => {
  const [dropdown, setDropdown] = useState('Net 30 Days');
  return (
    <label className={classList}>
      <h4>{text}</h4>
      <select value={dropdown} onChange={ e => {setDropdown(e.target.value)} }>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
        <option value={option3}>{option3}</option>
        <option value={option4}>{option4}</option>
      </select>
    </label>
  )
}

Dropdown.defaultProps = {
  text: 'Payment Terms',
  classList: 'dropdown',
  option1: 'Net 1 Day',
  option2: 'Net 7 Days',
  option3: 'Net 14 Days',
  option4: 'Net 30 Days',
}

export default Dropdown
