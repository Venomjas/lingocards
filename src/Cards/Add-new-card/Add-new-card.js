
import './Add-new-word.css'
function AddNewCard () {
    return(
        <div className='add-new-word'>
            <label>Добавить слово
                <input className='word' type="text" />
            </label>

            <label>Перевод
                <input className='word' type="text" />
            </label>
        </div>
    )
}
export default AddNewCard;