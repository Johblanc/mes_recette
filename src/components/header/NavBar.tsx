import React, { useState, useEffect } from 'react';


export function NavBar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }
    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);
            if(largeur>500){
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
            <h1>Titre</h1>
            <nav>
                {toggleMenu && (  //short circuit operator,evite l'ope ternaire(si oui j'envoie si non je n'envoie rien)
                    <ul className="liste">
                        <li className="items">Accueil</li>
                        <li className="items">Nom</li>
                        <li className="items">Catégorie</li>
                        <li className="items">Ingrédient</li>
                        <li className="items">Favoris</li>
                    </ul>
                )}

                <button onClick={toggleNavSmallScreen} className="btn">BTN</button>
            </nav>
        </div>
    )
}