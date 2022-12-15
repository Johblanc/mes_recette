import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
const [ingredients, setIngredients] = useState('');
const [results, setResults] = useState([]);


//Tout d'abord, le composant SearchByIngredients importe les composants Form, Input et Button d'Ant Design, ainsi que axios. Je les utilise après pour créer un formulaire de recherche d'ingrédients.
const SearchByIngredients = () => {
    const [ingredients, setIngredients] = useState('');
    const [results, setResults] = useState([]);

    //Lorsque l'utilisateur soumet le formulaire en cliquant sur le bouton "Rechercher", la fonction handleSearch est appelée. Cette fonction utilise la fonction async/await pour effectuer une requête GET à l'API avec les ingrédients saisis par l'utilisateur. La réponse de l'API est traitée dans le then de la promesse retournée par axios.get(), et utilisée pour mettre à jour l'état du composant avec les résultats de la recherche.
    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();



        const getIngredients = async () => {
            try {
                const response = await axios.get('www.themealdb.com/api/json/v1/1/list.php?i=list');
                // Appel de  l'API ici pour effectuer la rechercheimport axios from 'axios';
                return response.data;
            } catch (error) {
                console.error(error);
            }
        }

        // en utilisant les ingrédients saisis par l'utilisateur
        // Mettre à jour le tableau de résultats avec les données retournées par l'API



        setResults(...);
        //Enfin, le composant rend le formulaire créé avec les composants Form, Input et Button d'Ant Design. Lorsque l'utilisateur saisit les ingrédients à rechercher et clique sur le bouton "Rechercher", la fonction handleSearch est appelée pour effectuer la requête à l'API

    }

    return (
        <Form onSubmit={handleSearch}>
            <Form.Item>
                <Input
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="Saisir les ingrédients à rechercher"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Rechercher
                </Button>
            </Form.Item>
        </Form>
    );
}

export default SearchByIngredients;

const getIngredientsById = async (id) => {
    try {
        const response = await axios.get(`www.themealdb.com/api/json/v1/1/list.php?i=list`);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

const ingredients = await getIngredientsById(id);

