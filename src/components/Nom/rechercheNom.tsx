import { useEffect, useState } from "react";
import { TOriginalMeal, TOriginalRequestMeal } from "../../Types/mealOrigine";
import { Recette } from "../recette/Recette";
import { requestZero } from "./requestZero";


export function RechercheNom(props: any) {
    const [dataAPI, setDataAPI] = useState(requestZero);
    const [firstLetter, setFirstletter] = useState("");
    const [currentMeal, setCurrentMeal] = useState("");
    const [currentId, setCurrentId] = useState("");
    const [tempMeal, setTempMeal] = useState("");


    useEffect(() => {
        async function fetchData() {
            if (firstLetter) {

                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
                const responseJson: TOriginalRequestMeal = await response.json();
                //console.log("test",responseJson);
                setDataAPI(responseJson);

            }
        }
        fetchData();

    }, [firstLetter]);
    useEffect(()=>{
        async function fetchData() {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${tempMeal}`);
            const responseJson: TOriginalRequestMeal = await response.json();
            console.log(responseJson.meals[0].idMeal);
            setCurrentId(responseJson.meals[0].idMeal);
        };
        fetchData();
    },[tempMeal]);
    function onNameChange(event: any) {
        console.log("change:", event.target.value);
        setFirstletter(event.target.value.split("")[0]);
        setCurrentMeal(event.target.value);
    };
    function onNameValidate(event: any) {
        event.preventDefault();
        console.log("validate:", currentMeal);
        setTempMeal(currentMeal);

    };
    return (
        <div id="Nom">
            <form onSubmit={onNameValidate} className="nom-form">
                <input type="text" placeholder="saisir nom" list="recettes" onChange={onNameChange} className="nom-input"></input>
                <datalist id="recettes">
                    {dataAPI.meals.map((item, i) => <option key={i} className="nom-option"> {item.strMeal}</option>)}

                </datalist>
                <button type="submit" className="nom-button">valider</button>
                
            </form>
            <Recette id={currentId}/>
        </div>
    )
}

