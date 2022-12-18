

import { useEffect, useState } from "react";
import { TOriginalMeal, TOriginalRequestMeal } from "../../Types/mealOrigine";
import { Recette } from "../recette/Recette";
import { requestZero } from "./requestZero";


export function TestNomRecette(props: any) {
    const [dataAPI, setDataAPI] = useState(requestZero);
    const [firstLetter, setFirstletter] = useState("e");
    const [currentId, setCurrentId] = useState("");
    

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
    function onNameChange(event: any) {
        console.log("change:", event.target.value);
        setFirstletter(event.target.value.split("")[0])
    }
    function onNameValidate(event: any) {
        event.preventDefault()
        console.log("validate:", event.target[0].value);
        for (let i = 0 ; i < dataAPI.meals.length ; i += 1){
            if (dataAPI.meals[i].strMeal === event.target[0].value){
                console.log(dataAPI.meals[i]);
                
                setCurrentId(dataAPI.meals[i].idMeal)
            }
        }

    }
    console.log("ID -->", currentId);
    
    return (
        <div >
            <form onSubmit={onNameValidate}>
                <input type="text" placeholder="saisir nom" list="recettes" onChange={onNameChange} className="font-weight-bold text-info bg-secondary"></input>
                <datalist id="recettes">
                    {dataAPI.meals.map((item, i) => <option key={i} className="font-weight-bold text-info"> {item.strMeal}</option>)}

                </datalist>
                <button type="submit" className="font-weight-bold text-info bg-secondary">valider</button>
                <Recette id={currentId}/>
            </form>
        </div>
    )
}

