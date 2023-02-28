import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Cocktail from "../components/Cocktail";
import axios from "axios";
import DrinksCategory from "../components/DrinksCategory";


function DrinkDetail() {
    const params = useParams();

    return <DrinksCategory drinkId={params.drinksId}/>
}

export default DrinkDetail;