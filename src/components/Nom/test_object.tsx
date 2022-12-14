import { useEffect, useState } from "react"
import { TMeal, TOriginalMeal } from "../../Types/mealOrigine";



export function convertMeal(meal : TOriginalMeal) : TMeal
{
    let result : TMeal = {
        id : meal.idMeal,
        titre : meal.strMeal,
        drink : meal.strDrinkAlternate,
        category : meal.strCategory,
        area : meal.strArea,
        instructions : meal.strInstructions,
        miniature : meal.strMealThumb,
        tags : meal.strTags,
        ingredients : [],
        video : meal.strYoutube,
        source : meal.strSource,
        imgSource : meal.strImageSource,
    } 
    if (meal.strIngredient1) {
        result.ingredients.push(
            {
                titre : meal.strIngredient1,
                dosage : meal.strMeasure1
            } ) 
    }
    if (meal.strIngredient2) {
        result.ingredients.push(
            {
                titre : meal.strIngredient2,
                dosage : meal.strMeasure2
            } ) 
    }
    if (meal.strIngredient3) {
        result.ingredients.push(
            {
                titre : meal.strIngredient3,
                dosage : meal.strMeasure3
            } ) 
    }
    if (meal.strIngredient4) {
        result.ingredients.push(
            {
                titre : meal.strIngredient4,
                dosage : meal.strMeasure4
            } ) 
    }
    if (meal.strIngredient5) {
        result.ingredients.push(
            {
                titre : meal.strIngredient5,
                dosage : meal.strMeasure5
            } ) 
    }
    if (meal.strIngredient6) {
        result.ingredients.push(
            {
                titre : meal.strIngredient6,
                dosage : meal.strMeasure6
            } ) 
    }
    if (meal.strIngredient7) {
        result.ingredients.push(
            {
                titre : meal.strIngredient7,
                dosage : meal.strMeasure7
            } ) 
    }
    if (meal.strIngredient8) {
        result.ingredients.push(
            {
                titre : meal.strIngredient8,
                dosage : meal.strMeasure8
            } ) 
    }
    if (meal.strIngredient9) {
        result.ingredients.push(
            {
                titre : meal.strIngredient9,
                dosage : meal.strMeasure9
            } ) 
    }
    if (meal.strIngredient10) {
        result.ingredients.push(
            {
                titre : meal.strIngredient10,
                dosage : meal.strMeasure10
            } ) 
    }
    if (meal.strIngredient11) {
        result.ingredients.push(
            {
                titre : meal.strIngredient11,
                dosage : meal.strMeasure11
            } ) 
    }
    if (meal.strIngredient12) {
        result.ingredients.push(
            {
                titre : meal.strIngredient12,
                dosage : meal.strMeasure12
            } ) 
    }
    if (meal.strIngredient13) {
        result.ingredients.push(
            {
                titre : meal.strIngredient13,
                dosage : meal.strMeasure13
            } ) 
    }
    if (meal.strIngredient14) {
        result.ingredients.push(
            {
                titre : meal.strIngredient14,
                dosage : meal.strMeasure14
            } ) 
    }
    if (meal.strIngredient15) {
        result.ingredients.push(
            {
                titre : meal.strIngredient15,
                dosage : meal.strMeasure15
            } ) 
    }
    if (meal.strIngredient16) {
        result.ingredients.push(
            {
                titre : meal.strIngredient16,
                dosage : meal.strMeasure16
            } ) 
    }
    if (meal.strIngredient17) {
        result.ingredients.push(
            {
                titre : meal.strIngredient17,
                dosage : meal.strMeasure17
            } ) 
    }
    if (meal.strIngredient18) {
        result.ingredients.push(
            {
                titre : meal.strIngredient18,
                dosage : meal.strMeasure18
            } ) 
    }
    if (meal.strIngredient19) {
        result.ingredients.push(
            {
                titre : meal.strIngredient19,
                dosage : meal.strMeasure19
            } ) 
    }
    if (meal.strIngredient20) {
        result.ingredients.push(
            {
                titre : meal.strIngredient20,
                dosage : meal.strMeasure20
            } ) 
    }
    console.log(meal);
    console.log(result);
    
    return result
}


export function TestConvertObject() {
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
                {dataAPI.meals.map( 
                    (item,i) => {
                    let newItem = convertMeal(item)
                    
                    return (
                    <div key={i}>
                        <h1>{newItem.titre}</h1>
                        {newItem.ingredients.map(
                            (item, i) =>
                            <p key={i}>{item.titre} : {item.dosage}</p>
                        )}
                    </div>
                    )

                    }
                    
                    )
                }
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