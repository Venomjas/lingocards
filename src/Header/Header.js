
// import Header from './Header/Header.js'
import Kosmonaft from "../Assets/img/kosmonaft.jpg"
import EngFlag from "../Assets/img/eng-flag.png"

function Header() {

  return (
  <header className="orange">
    <div className="container">
      <div className="header">
        <div className="header-image">
          <img className="header-img" src={Kosmonaft} alt="" />
          <div className="logo-button">
            <img className="logo-image" alt="">
            <button className="language-button">
              <img className="eng-flag" src={EngFlag} alt="" />Выбрать язык
            </button>
          </div>
        </div>

        <ul className="navigation">
          <li className="header-list"><a className="link" href="#">Вход</a></li>
          <li className="header-list"><a className="link" href="#">Регистрация</a></li>
          <li className="header-list"><a className="link" href="#">Информация</a></li>
        </ul>
      </div>
    </div> 
  </header>
    )}

export default Header;