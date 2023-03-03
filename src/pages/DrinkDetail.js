import {useLoaderData} from "react-router-dom";
import Cocktail from "../components/Cocktail";


function DrinkDetail() {
    const drinksData = useLoaderData();
    return   <Cocktail list={drinksData}/>
}

export default DrinkDetail;