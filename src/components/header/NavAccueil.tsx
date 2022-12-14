import {useEffect, useState} from 'react';


export function NavAccueil(props: { navTo: string, texte: string }): JSX.Element {
    return (
        <div>
            <nav>
                <ul className="liste">
                    <li className="items">Accueil</li>
                    <li className="items">Nom</li>
                    <li className="items">Catégorie</li>
                    <li className="items">Ingrédient</li>
                    <li className="items">Favoris</li>
                </ul>
            </nav>
        </div>
    )
}