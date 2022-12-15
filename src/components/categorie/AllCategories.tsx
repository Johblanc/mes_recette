import { useEffect, useState } from "react";



export function Category() {
    console.log("test");

    const [meal, setMeal] = useState(
        {
            categories:// vérifier le nom attribué dans la console
                [
                    {
                        idCategory: "",
                        strCategory: "",
                        strCategoryThumb: "",
                        strCategoryDescription: ""
                    }
                ]
        }

    );
    useEffect(() => {

        async function fetchData() {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            console.log(response);

            const responseJson = await response.json();
            console.log(responseJson);
            setMeal(responseJson);
        }

        fetchData();
    }, []);

    return (
        <div>
            <p>Recherche par catégorie</p>
            <input className="inputMeal" type="text" placeholder="Select a category" />
            {meal.categories.map((item, i) => <p key={i}>{item.strCategory}</p>)}

            <button>Soumettre</button>
        </div>
    )

}



