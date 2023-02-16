import {Component} from 'react';
import '../stylesheets/MainMenu.css';

const cocktailTypes = ['Alcoholic', 'Non Alcoholic',
    'Ordinary Drink', 'Cocktail glass',
    'Champagne flute'];

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        let category = event.target.getAttribute('href');
        this.props.selectedCocktail(category);
    }

    render() {
        return (
            <>
                <ul className="CocktailListNav">
                    {cocktailTypes.map(item =>
                        <li key={item} onClick={this.handleClick}><a href={item}>{item}</a></li>
                    )}
                </ul>
            </>
        )
    }
}

export default MainMenu;