import React, {useState} from 'react'

const Dropdown = ({classList, text, option1, option2, option3, option4}) => {
  const [dropdown, setDropdown] = useState('Net 30 Days');
  
  return (
    <>
      <h4 className='dropdown-h4 light-theme'>{text}</h4>
    <label className='dropdown'>
      
      <select className='select-box light-theme' value={dropdown} onChange={e => { setDropdown(e.target.value) }} onMouseDown={e => {
          //mobile devices under 420px will revert to default dropdown styles
          if (window.innerWidth >= 420) {
            // creating new stylable ul component to maintain semantic html and SEO with <select> and <option> elements
          if (!document.body.contains(document.querySelector('.selector-options'))) {
            const selector = document.querySelector('.dropdown');
          //keeping options and original dropdown from activating
          e.preventDefault();
          e.target.focus();

          //creating ul underneath <select> element
          const select = selector.children[0];
          const dropDown = document.createElement('ul');
          dropDown.className = 'selector-options light-theme';

          [...select.children].forEach(option => {
            const dropDownOption = document.createElement('li');
            dropDownOption.textContent = option.textContent;

            //adding user selection to dom
            dropDownOption.addEventListener('mousedown', e => {
              e.stopPropagation();
              select.value = option.value;
              selector.value = option.value;
              dropDown.remove();
            });

            dropDown.appendChild(dropDownOption);
          });
          selector.appendChild(dropDown);

          //menu close on click out
          document.addEventListener('click', e => {
            if (!select.contains(e.target)) {
              dropDown.remove();
            }
          });
          }
          
          //menu close on clicking box while ul exists
          else {
            e.preventDefault();
            const dropDown = document.querySelector('.selector-options');
            dropDown.remove();
            e.target.blur();
          }
          
        }
      }}>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
        <option value={option3}>{option3}</option>
        <option value={option4}>{option4}</option>
      </select>
      </label>
      </>
  );
}

Dropdown.defaultProps = {
  text: 'Payment Terms',
  option1: 'Net 1 Day',
  option2: 'Net 7 Days',
  option3: 'Net 14 Days',
  option4: 'Net 30 Days',
}

export default Dropdown
