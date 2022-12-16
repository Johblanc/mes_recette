import { TOriginalMeal, TMeal } from "../../Types/mealOrigine"


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
    
    return result
}
