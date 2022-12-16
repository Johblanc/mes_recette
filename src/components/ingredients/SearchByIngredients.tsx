import { useEffect, useState } from "react";
import { TOriginalRequestMeal } from "../../Types/mealOrigine";
import { requestIngredients } from "./requestingredients";


export function SearchByIngredients(){
    const [dataAPI, setDataAPI] = useState(requestIngredients);
    const [ingredients, setIngredients] = useState("e")

    useEffect(() => {
        async function fetchData() {
            if (ingredients) {

                const response = await fetch(`https:www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
                const responseJson: TOriginalRequestMeal = await response.json();
                //console.log("test",responseJson);
                setDataAPI(responseJson);

            }
        }
        fetchData();

    }, [ingredients]);
    function onNameChange(event: any) {
        console.log("change:", event.target.value);
        setIngredients(event.target.value.split("")[0])
    }
    function onNameValidate(event: any) {
        event.preventDefault()
        console.log("validate:", event);

    }
    return (
        <div>
            <form onSubmit={onNameValidate}>
                <input type="text" placeholder="saisir un ingedient" list="recettes" onChange={onNameChange} />
                <datalist id="recettes">
                    {dataAPI.meals.map((item, i) => <option key={i}> {item.strMeal}</option>)}

                </datalist>
                <button type="submit">valider</button>
            </form>
        </div>
    )
}
