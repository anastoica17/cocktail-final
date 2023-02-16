import {Component} from "react";
import '../stylesheets/SearchComponent.css';
import SearchCocktail from "./SearchCocktail";

class SearchComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <SearchCocktail selectedCategory={this.props.selectedCocktail}/>
                <section className="SearchCocktail"/>
            </>
        );
    }
}

export default SearchComponent;