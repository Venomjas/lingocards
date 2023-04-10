import './Card.css'
import { useState } from "react";

function Card (props) {
    const [state, setState] = useState(false);

    const handleClick = () => {
        setState(!state)
    }

    return (
        <article className="flip" onClick={handleClick}>
            <div className={`card ${state ? 'flipped' : ''}`}>
                <div className="face front">
                    {props.nameEn}
                </div>

                <div className="face back">
                    {props.nameRu}
                </div>
            </div>
        </article>
    );  
}
export default Card;