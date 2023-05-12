import { useLocation } from 'react-router-dom';
import { ROUTES } from '../routes';


const Head = () => {
    let location = useLocation()
    console.log(location.pathname)

    const getTitle = () => {
        switch (location.pathname) {
            case ROUTES.ADJECTIVES.A:
                return 'Прилагательные сложного уровня';
            case ROUTES.ADJECTIVES.B:
                return 'Прилагательные среднего уровня';
            case ROUTES.ADJECTIVES.C:
                return 'Прилагательные легкого уровня';

            case ROUTES.NOUNS.A:
                return 'Существительные сложного уровня';
            case ROUTES.NOUNS.B:
                return 'Существительные среднего уровня';
            case ROUTES.NOUNS.C:
                return 'Существительные легкого уровня';

            case ROUTES.VERBS.A:
                return 'Глаголы сложного уровня';
            case ROUTES.VERBS.B:
                return 'Глаголы среднего уровня';
            case ROUTES.VERBS.C:
                return 'Глаголы легкого уровня';

            default: 
                return 'Стандартный заголовок';
        }
    }

    return (
        <h1>{getTitle()}</h1>
    )
}
export default Head;