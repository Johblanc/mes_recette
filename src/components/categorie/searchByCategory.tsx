import { useEffect, useState } from 'react';
import { OriginalCat, Cat, TOriginalRequestCat} from "../../Types/OriginalCat";
import { TMeal } from '../../Types/mealOrigine';
import { stringify } from 'querystring';
import { choixUtilisateur } from './choixUtilisateur';

export function SelectedCategory(genre: OriginalCat): Cat {
    console.log("genre:", genre);
    // l'utilisateur a selectionné sa catégorie
    let result: Cat = {

        id: genre.idCategory,
        categorie: genre.strCategory,
        imgSrc: genre.strCategoryThumb,
        description: genre.strCategoryDescription

    }
    console.log("result :", result);
    return result;
};
export function FilterByCategory(props: any) {
    const [dataAPI, setDataAPI] = useState(choixUtilisateur);//extraire toutes les recettes de la categorie selectionnée
    const [result, setResult] = useState(

        {
            meals:
                [
                    {
                        idCategory: "",
                        strCategory: "",
                        strCategoryThumb: "",
                        strCategoryDescription: "",


                    }
                ]
        }
    );
    useEffect(() => {

        async function fetchData() {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood${result}`);
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





