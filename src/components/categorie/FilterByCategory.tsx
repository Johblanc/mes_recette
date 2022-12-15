import { useEffect, useState } from 'react';
import { Cat, OriginalCat } from "../../Types/OriginalCat";
import { TMeal } from '../../Types/mealOrigine';
import { stringify } from 'querystring';
/* 
export function FilterByCategory(genre: OriginalCat):Cat {
    console.log("genre:",genre);
     // l'utilisateur a selectionné sa catégorie
     let result: Cat = { 

        id: genre.idCategory,
        categorie: genre.strCategory,
        imgSrc: genre.strCategoryThumb,
        description: genre.strCategoryDescription

    }
    
    console.log("result :", result);
}  */
export function HandleCategory() { //extraire toutes les recettes de la categorie selectionnée

    const [result, setResult] = useState(

        {
            meals:
                [
                    {
                        strMeal: "",
                        strMealThumb: "",
                        idMeal: ""
                    }
                ]
        }
    );
    useEffect(() => {

        async function fetchData() {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
            console.log(response);

            const responseJson = await response.json();
            console.log(responseJson);
            setResult(responseJson);
        }
        fetchData();

    }, []);


    return (
        <div>
            <button id="btnSend" >SEND</button>
        </div>

    )
};





