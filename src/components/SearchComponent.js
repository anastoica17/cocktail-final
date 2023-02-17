import '../stylesheets/SearchComponent.css';
import SearchCocktail from "./SearchCocktail";

function SearchComponent(props) {
    return (
        <>
            <SearchCocktail selectedCategory={props.selectedCocktail}/>
            <section className="SearchCocktail"/>
        </>
    );
}

export default SearchComponent;