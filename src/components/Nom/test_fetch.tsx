import { useEffect, useState } from "react"

export function RechercheNom2() {
    const [dataAPI ,setDataAPI] = useState(
        {
            meals : 
            [
                {
                    idMeal: "",
                    strMeal: "",
                    strDrinkAlternate: "",
                    strCategory: "",
                    strArea: "",
                    strInstructions: "",
                    strMealThumb: "",
                    strTags: "",
                    strYoutube: "",
                    strIngredient1: "",
                    strIngredient2: "",
                    strIngredient3: "",
                    strIngredient4: "",
                    strIngredient5: "",
                    strIngredient6: "",
                    strIngredient7: "",
                    strIngredient8: "",
                    strIngredient9: "",
                    strIngredient10: "",
                    strIngredient11: "",
                    strIngredient12: "",
                    strIngredient13: "",
                    strIngredient14: "",
                    strIngredient15: "",
                    strIngredient16: "",
                    strIngredient17: "",
                    strIngredient18: "",
                    strIngredient19: "",
                    strIngredient20: "",
                    strMeasure1: "",
                    strMeasure2: "",
                    strMeasure3: "",
                    strMeasure4: "",
                    strMeasure5: "",
                    strMeasure6: "",
                    strMeasure7: "",
                    strMeasure8: "",
                    strMeasure9: "",
                    strMeasure10: "",
                    strMeasure11: "",
                    strMeasure12: "",
                    strMeasure13: "",
                    strMeasure14: "",
                    strMeasure15: "",
                    strMeasure16: "",
                    strMeasure17: "",
                    strMeasure18: "",
                    strMeasure19: "",
                    strMeasure20: "",
                    strSource: "",
                    strImageSource: "",
                    strCreativeCommonsConfirmed: "",
                    dateModified: ""
                }
            ]
        }
    )
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b");
            
            const responseJson = await response.json();
            setDataAPI(responseJson);
            

        }
        fetchData();

    }, [] );

    type teee = {
        testA? : string,
        testB? : string
    }

    let a : teee = {
        testA : "",
        testB : "666"
    };

    let testComplet = a.testA && a.testB
    console.log("test :",testComplet);
    
    
    return (
        <div>
            <form>
                <input type="text" placeholder="saisir nom" ></input>
                <button type="submit"></button>
                {testComplet && 
                <div>
                    <p>Liste :</p>
                    <p>{a.testA}</p>
                    <p>{a.testB}</p>
                </div>}
            </form>
        </div>
    )
}/*
{dataAPI.meals.map( (item,i) => <p key={i}>{item.strMeal}</p>)}*/