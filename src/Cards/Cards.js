import './Cards.css';
import Apple from '../Assets/img/apple.png';
import Car from '../Assets/img/car.png';
import Book from '../Assets/img/book.jpg';

function Cards () {
    return(
        <div className="card-container">
            <div className="card">
            <div className="front">
                <h2>Apple</h2>
                <img src={Apple} alt="Apple" />
            </div>
            <div className="back">
                <p>Фрукт, похожий на яблоко.</p>
                <button>Показать перевод</button>
            </div>
            </div>
            
            <div className="card">
            <div className="front">
                <h2>Car</h2>
                <img src={Car} alt="Car" />
            </div>
            <div className="back">
                <p>Транспортное средство для перевозки людей и грузов.</p>
                <button>Показать перевод</button>
            </div>
            </div>

            <div className="card">
            <div className="front">
                <h2>Book</h2>
                <img src={Book} alt="Book" />
            </div>
            <div className="back">
                <p>Напечатанное издание текста или рисунков, связанных между собой и сшитых в книгу.</p>
                <button>Показать перевод</button>
            </div>
            </div>
        </div>
    )
}
export default Cards;
