import Cocktail from "./Cocktail";
import axios from "axios";
import {useRef, useState} from "react";

function SearchCocktail() {
    const [drinkList, setDrinkList] = useState([]);
    const searchInput = useRef();

    const handleChange = async (e) => {
        e.preventDefault();
        const inputValue = searchInput.current.value;
        let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inputValue;
        axios({
            url: url,
            method: "get",
            withCredentials: false,
            headers: {"Content-Type": "application/json"}
        }).then(res => {
            const drinks = res.data;
            setDrinkList(drinks.drinks);
        });
    }

    return (
        <>
            <section>
                <div className="ButtonInput">
                    <input id="searchInput" type="text"
                           ref={searchInput}
                           placeholder="Search here"
                           className="SearchBox"
                    />
                    <button onClick={handleChange}/>
                </div>
            </section>
            <Cocktail list={drinkList}/>
        </>);
}

export default SearchCocktail;