import React, { useState, useEffect } from 'react';
import './NavBar.css';


export function NavBar() {

    const [toggleMenu, setToggleMenu] = useState(false);
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
            <h1>Titre
            <button onClick={toggleNavSmallScreen} className="">BTN</button>
            </h1>

            <nav>
                {toggleMenu && (
                    <ul className="liste">
                        <li className="items">Accueil</li>
                        <li className="items">Nom</li>
                        <li className="items">Catégorie</li>
                        <li className="items">Ingrédient</li>
                        <li className="items">Favoris</li>
                    </ul>
                )}
                
            </nav>
        </div>
    )
}