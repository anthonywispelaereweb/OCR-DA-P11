import { useState } from 'react'
import './Dropdown.scss'

const DropDown = ({ content, title }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={'dropdown' + (isOpen ? ' show' : '')}>
      <button className='dropdown-header' onClick={toggleDropdown}>
        {title}
        <i className='dropdown-icon fa-solid fa-chevron-up'></i>
      </button>
      <div className='dropdown-content'>
        {typeof content === 'string' ? (
          <p className='dropdown-text'>{content}</p>
        ) : (
          <ul className='dropdown-list'>
            {content.map((item, index) => (
              <li key={index} className='dropdown-list-item'>
                <p className='dropdown-text'>{item}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
export default DropDown
