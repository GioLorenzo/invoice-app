import React, {useState} from 'react'

const Dropdown = ({classList, text, option1, option2, option3, option4}) => {
  const [dropdown, setDropdown] = useState('Net 30 Days');
  
  return (
    <label className={classList}>
      <h4>{text}</h4>
      <select className='select-box' value={dropdown} onChange={e => { setDropdown(e.target.value) }} onMouseDown={e => {
        // creating new stylable ul component to maintain semantic html and SEO with <select> and <option> elements

        const selector = document.querySelector('.dropdown-select')
        e.preventDefault();
        e.target.focus();

        const select = selector.children[1];
        const dropDown = document.createElement('ul');
        dropDown.className = 'selector-options';

        [...select.children].forEach(option => {
          const dropDownOption = document.createElement('li');
          dropDownOption.textContent = option.textContent;
          dropDown.appendChild(dropDownOption);
        });
        selector.appendChild(dropDown);
      }}>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
        <option value={option3}>{option3}</option>
        <option value={option4}>{option4}</option>
      </select>
    </label>
  );
}

Dropdown.defaultProps = {
  text: 'Payment Terms',
  classList: 'dropdown dropdown-select',
  option1: 'Net 1 Day',
  option2: 'Net 7 Days',
  option3: 'Net 14 Days',
  option4: 'Net 30 Days',
}

export default Dropdown
