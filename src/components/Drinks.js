import '../stylesheets/MainMenu.css';
import {Link} from "react-router-dom";

const cocktailTypes = [
    {
        id: 'Cocoa',
        name: 'Cocoa'
    },
    {
        id: 'Homemade_Liqueur',
        name: 'Homemade Liqueur'
    },
    {
        id: 'Ordinary_Drink',
        name: 'Ordinary Drink'
    },
    {
        id: 'Cocktail',
        name: 'Cocktail glass',
    },
    {
        id: 'Shot',
        name: 'Shot'
    },
    {
        id: 'Shake',
        name: 'Shake'
    },
    {
        id: 'Soft_Drink',
        name: 'Soft Drink'
    }
];

function Drinks() {
    return (

        <>
            <ul className="CocktailListNav">
                {cocktailTypes.map(item =>
                    <li key={item.id}>
                        <Link to={`/drinks/${item.id}`}>{item.name}</Link>
                    </li>
                )}
            </ul>
        </>
    )
        ;
}

export default Drinks;