import { useState } from 'react';
import './Menu.css';

function  Menu () {
  
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    console.log('click')
    setOpen(!isOpen)
  }
    
  return(
  <div className='menu-container'>
    <button onClick={toggleMenu}>Меню</button>

    <nav className={`nav ${isOpen ? 'active' : ''}`}>
      <ul className='ul'>
        <li className='nouns'><a href="#">существительные</a>
          <ul>
            <li><a href="#">сложность A</a></li>
            <li><a href="#">сложность B</a></li>
            <li><a href="#">сложность C</a></li>
          </ul>
        </li>
        <li className='adjectives'><a href="#">прилагательные</a>
          <ul className=''>
            <li><a href="#">сложность A</a></li>
            <li><a href="#">сложность B</a></li>
            <li><a href="#">сложность C</a></li>
          </ul>
        </li>
        <li className='verbs'><a href="#">глаголы</a>
          <ul>
            <li><a href="#">сложность A</a></li>
            <li><a href="#">сложность B</a></li>
            <li><a href="#">сложность C</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
    );
}
export default Menu;