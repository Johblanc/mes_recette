import React from "react";

interface Ingredient {
    name: string;
    category: string;
}

interface Props {
    ingredients: Ingredient[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
    const { ingredients, selectedCategory, onSelectCategory } = props;

    // ingredients par categorie
    const groupedIngredients = ingredients.reduce((acc: { [key: string]: Ingredient[] }, ingredient) => {
        if (!acc[ingredient.category]) {
            acc[ingredient.category] = [];
        }
        acc[ingredient.category].push(ingredient);
        return acc;
    }, {});

    // Creation d'une liste par categories
    const categories = Object.keys(groupedIngredients);
    const listeIngredients = categories.map(
        (category,index) => {
            return(
                <li key= { index } >
                    <a
                        href="#" 
                        className = {selectedCategory === category ? 'active' : ''} >
                            { category }
                        </a>
    
    </li>
            )

        }
        
    )

    return (
        <header>
            <nav>
                <ul>
                    {
        categories.map((category) => {
            <li key= { category } >
            <a href="#" className = { selectedCategory === category ? 'active' : ''} 
            onClick = {() => onSelectCategory(category)}>
    { category }
    < /a>
    < /li>
                    })
                </ul>
            < /nav>
        < /header>
    );
};
