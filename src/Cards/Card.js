function Card () {
retturn(
    <li className="card">
        <div className="front">
            <h2>Apple</h2>
            <img src={Apple} alt="Apple" />
            </div>
        <div className="back">
            <p>Фрукт, похожий на яблоко.</p>
            <button>Показать перевод</button>
        </div>
    </li>
    );  
}
export default Card;