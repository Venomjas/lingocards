import './Header.css';
import Logo from '../Assets/img/lingo-logo.png'
import { useState } from 'react';

function Header () {
    const [isCheck, setCheck] = useState(false);

    const handleClick = () => {
        setCheck(!isCheck);
        document.body.classList.toggle('dark');
    }

    return (      
        <ul className='navbar'>
            <li className='navbar-item'>
                <h1> </h1>
            </li>

            <li className='navbar-item'>
                <label className="switch" >
                    <input type="checkbox" checked={isCheck} onClick={handleClick} />
                    <span className="slider"></span>
                </label>
            </li>

        </ul> 
    )
}
export default Header;