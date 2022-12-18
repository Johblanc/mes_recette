import { useEffect, useState } from "react";
import { requestZero } from "./requestZero";

export function NameId(props: { id: string }) {
    const [nameId, setNameId] = useState("");
    if (nameId) {
        const [dataAPI, setDataAPI] = useState(requestZero.meals);
        useEffect(() => {
            async function fetchData() {// Laure dit:adresse pour modif par id: www.themealdb.com/api/json/v1/1/lookup.php?i=(52772)/remplacement search par lookup
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`);
                const responseJson = await response.json();
                setDataAPI(responseJson.meals);
            }
            fetchData();

        }, [nameId]);
        const onNameChange = (event: any) => {
            console.log("change:", event.target.value);
            setNameId(event.target.value.split("")[0])
        }
        const onNameValidate = (event: any) => {
            event.preventDefault()
            console.log("validate:", event);

        }
        return (
            <div >
                <form onSubmit={onNameValidate}>
                    <input type="text" placeholder="saisir nom" list="recettes" onChange={onNameChange} className="font-weight-bold text-info bg-secondary"></input>
                    <datalist id="recettes">
                        {dataAPI.map((item, i) => <option key={i} className="font-weight-bold text-info"> {item.strMeal}</option>)}

                    </datalist>
                    <button type="submit" className="font-weight-bold text-info bg-secondary">valider</button>

                </form>
            </div>
        )
    }
}

