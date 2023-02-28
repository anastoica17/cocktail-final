import {useEffect, useState} from "react";
import axios from "axios";
import Cocktail from "./Cocktail";

function DrinksCategory(props) {
    const [drinkList, setDrinkList] = useState([]);

    useEffect(() => {
        let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + props.drinkId;
        axios({
            url: url,
            method: "get",
            withCredentials: false,
            headers: {"Content-Type": "application/json"}
        }).then(res => {
            const drinks = res.data;
            setDrinkList(drinks.drinks);
        });
    }, [props.drinkId]);
    return <>
        <Cocktail list={drinkList}/>
    </>
}

export default DrinksCategory;