import { useState } from "react";
import { Recette } from "../recette/Recette";

export function Favoris(){ //Fonction JSX classique
    let lsFavoris = localStorage.getItem ("dataFavoris");

    console.log(lsFavoris);
    const [favoris, setFavoris] = useState(JSON.parse(lsFavoris!)) // parse pour transformer un texte en liste ou en objet

// parse pour transformer un texte en liste ou en objet
    console.log(favoris);
    
    const affichageFavoris = favoris.map((item: string, i: number) =>
        <Recette id={item} key = {i} />
    )
    
    return (
        <div>
            {affichageFavoris}
        </div>

    )
}