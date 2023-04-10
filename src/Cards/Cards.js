import './Cards.css';
import Card from '../Card/Card';

function Cards (props) {
    const data = props.data || [];
    return (
    <div className='cards-container' >  
        <ul className="cards">
            {data.map((item, index) => {
                return (
                    <li className="cardElement" key={index}>
                        <Card nameEn={item.nameEn} nameRu={item.nameRu} />
                    </li>
                )
            }
        )
    }
        </ul>
    </div>  
    )
}
export default Cards;
