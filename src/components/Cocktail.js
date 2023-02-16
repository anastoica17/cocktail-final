import '../stylesheets/Cocktail.css';
import {Component} from "react";

class Cocktail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section className="DrinksTable">
                    {this.props.list.map(item =>
                        <div className="DrinkBox" key={item.idDrink}>
                            <img src={item.strDrinkThumb} alt={item.strDrink}></img>
                            <div>{item.strDrink}</div>
                        </div>
                    )}
                </section>
            </>
        );
    }


}

export default Cocktail;