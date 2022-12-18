import { useEffect, useState } from 'react';
import { TOriginalRequestMeal } from '../../Types/mealOrigine';
import { choixUtilisateur } from './choixUtilisateur';
import { FilterCatOrigine, FilterCatRequestOrigine, FilterCat } from '../../Types/filtreParCategorie'


export function FilterByCategory() {

    const [dataAPI, setDataAPI] = useState(choixUtilisateur);

    const [SelectCategory, setSelectCategory] = useState(
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

            if (SelectCategory) {

                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${SelectCategory}`);
                console.log(response);

                const responseJson = await response.json();
                console.log(responseJson);

                setSelectCategory(responseJson);
            }
        }
        fetchData();

    }, []);

    return (
        <div id='Categorie' >
            <form >
                <input type="text" placeholder="choix" list="recettes" className="font-weight-bold text-info bg-secondary"></input>

                <button type="submit" className="font-weight-bold text-info bg-secondary">valider</button>

            </form>
        </div>
    )

}





