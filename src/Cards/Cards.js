import './Cards.css';
import Card from '../Card/Card';
import Head from '../Head/Head';
import AddNewCard from './Add-new-card/Add-new-card.js'
function Cards (props) {
    const data = props.data || [];

    return (
        
    <div className='cards-container' >
        <Head className='head'/>
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
 

    <AddNewCard />
        </ul>
    </div>  
    )
}
export default Cards;
