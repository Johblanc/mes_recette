import React from 'react';
import MealCard from '../MealCard/mealcard';
import './mealscontainer.css';
import Alert from 'react-bootstrap/Alert';

// container des cards
function RecettesContainer({meals}) 
{
  return (
      /*Utiliser la carte pour montrer la recette*/
    <div className='meals-container'>
      {!meals && // Si l'API ne trouve pas de recette correspondant à la recherche retourné: désolé ...
      <Alert className="mt-5" variant='warning'>
          Sorry, could not find this recipe
      </Alert>
      }
      {meals?.map((meal) => ( // map meals mapper et remplir les propriétés de la recette si les recettes peuvent être trouvés
        <MealCard key = {meal.idMeal} {...meal}/>
      ))}
    </div>
  );
}

export default RecettesContainer;