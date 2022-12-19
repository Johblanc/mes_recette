import { useEffect, useState } from "react";
import { convertMeal } from "./convertMeal";
import { recetteZero } from "./recette0";

export function Recette(props: { id: string }) {

    const [dataAPI, setDataAPI] = useState(convertMeal(recetteZero.meals[0]))
    


    useEffect(() => {
        async function fetchData() {
            if (props.id) {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`);

                const responseJson = await response.json();
                console.log(responseJson);

                setDataAPI(convertMeal(await responseJson.meals[0]));

            }
        }
        fetchData();

    }, [props.id])
    const listIngredients = dataAPI.ingredients.map(
        (item, i) => (<p key={i}>{item.titre} : {item.dosage}</p>)
    )
    console.log(props.id);

    return (
        <>
            {listIngredients}
            <p>{dataAPI.area}</p>
            <p>{dataAPI.category}</p>
            <p>{dataAPI.drink}</p>
            <p>{dataAPI.id}</p>
            <p>{dataAPI.imgSource}</p>
            <p>{dataAPI.instructions}</p>
            <img src={dataAPI.miniature!} alt="recette" ></img>
            <p>{dataAPI.source}</p>
            <p>{dataAPI.tags}</p>
            <p>{dataAPI.titre}</p>
            <p>{dataAPI.video}</p>
        </>

    )
}