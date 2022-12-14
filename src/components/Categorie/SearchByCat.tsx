import { useEffect, useState } from "react";

export function SearchByCat() {
    useEffect(() => {

        async function fetchData([]) {
            const response = await fetch('https:www.themealdb.com/api/json/v1/1/categories.php');
            //Requete de toutes les catégories
            const responseJson = await response.json();
            console.log(response.json);
        }
        fetchData([]);

        /* function getMeal() {
            const mealChoice = inputMeal.value;
            const url = `https:www.themealdb.com/api/json/v1/1/filter.php?c=${mealChoice}/`;
            
            

            fetch(url)
                .then(function (response) {
                    return response.json();
                })
        }
        getMeal();*/

    }, []);

    return (
        <div>
            <p>Recherche par catégorie</p>
            <input className="inputMeal" type="text" placeholder="Select a category" />
            <button>Soumettre</button>

        </div>
    )

}



