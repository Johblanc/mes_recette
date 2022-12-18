import React, { useState, useEffect } from 'react';
import './NavBar.css';




export function NavBar() {

    const [toggleMenu, setToggleMenu] = useState(true);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const toggleNavSmallScreen = () => {
        console.log("bouton test", toggleMenu);

        setToggleMenu(!toggleMenu);
    }
    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);
            if (largeur > 500) {
                setToggleMenu(false);
            }
        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.addEventListener('resize', changeWidth);
        }

    }, [])

    return (
        <div>
            <h1>Mes Recettes</h1>
            <button onClick={toggleNavSmallScreen} className="btn" >BTN</button>
            <nav>
                {toggleMenu && (
                    <ul className="liste">
                        <li className="items"><a href ="#Accueil">Accueil</a></li>
                        <li className="items"><a href ="#Nom">Nom</a></li>
                        <li className="items"><a href ="#Categorie">Catégorie</a></li>
                        <li className="items"><a href ="#Ingredient">Ingrédient</a></li>
                        <li className="items"><a href ="#Favoris">Favoris</a></li>
                    </ul>
                )}
                
            </nav>
        </div>
    )
}