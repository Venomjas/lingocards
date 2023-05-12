
import { ROUTES } from '../routes';
import './Menu.css';

function  Menu (props) {
   
  return(
  <div className='menu-container'>
    <nav className='nav'>
      <ul className='ul'>
        <li className='nouns part-of-speech'><a href="#">существительные</a>
          <ul className='complexity'>
            <li className='complexity-item'><a href="/DataNounsA" className='link'>сложность A</a></li>
            <li className='complexity-item'><a href="/DataNounsB" className='link'>сложность B</a></li>
            <li className='complexity-item'><a href="/DataNounsC" className='link'>сложность C</a></li>
          </ul>
        </li>
        <li className='adjectives part-of-speech'><a href="#" >прилагательные</a>
          <ul className='complexity'>
            <li className='complexity-item'><a href={ROUTES.ADJECTIVES.A} className='link'>сложность A</a></li>
            <li className='complexity-item'><a href="DataAdjectivesB" className='link'>сложность B</a></li>
            <li className='complexity-item'><a href="DataAdjectivesC" className='link'>сложность C</a></li>
          </ul>
        </li>
        <li className='verbs part-of-speech'><a href="#">глаголы</a>
          <ul className='complexity'>
            <li className='complexity-item'><a href="DataVerbsA" className='link'>сложность A</a></li>
            <li className='complexity-item'><a href="DataVerbsB" className='link'>сложность B</a></li>
            <li className='complexity-item'><a href="DataVerbsC" className='link'>сложность C</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
    );
}
export default Menu;