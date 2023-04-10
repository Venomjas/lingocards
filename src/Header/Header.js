import './Header.css';
import Logo from '../Assets/img/lingo-logo.png'

function Header () {

    return (      
        <ul className='navbar'>
            <li className='navbar-item'>
                <h1> </h1>
            </li>

            <li className='navbar-item'>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </li>

        </ul> 
    )
}
export default Header;