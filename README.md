# mes_recette

effectuer une recherche par titre/catégorie/clé
afficher les détails d'une recette (titre,Ingrédients, instructions,nationnalité,catégorie ...)

ajouter/retirer une recette de mes favoris (les stocker dans un fichier **JSON **ou utiliser LocalStorage) => Par id



Dans notre maquette :
. mes favoris
. barres de recheche :
    . par titre
        . Search meal by name
        . www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
        . List all meals by first letter
        . www.themealdb.com/api/json/v1/1/search.php?f=a
    . par catégorie
        . List all meal categories
        . www.themealdb.com/api/json/v1/1/categories.php
        . Filter by Category
        . www.themealdb.com/api/json/v1/1/filter.php?c=
    . par ingrédientcomit 
        .www.themealdb.com/api/json/v1/1/list.php?i=list
        .www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
    . par clé
        . Lookup full meal details by id
        . www.themealdb.com/api/json/v1/1/lookup.php?i=52772

Pour les images :
. Meal Thumbnail Images
. Add /preview to the end of the meal image URL
. /images/media/meals/llcbn01574260722.jpg/preview
. Ingredient Thumbnail Images
. www.themealdb.com/images/ingredients/Lime.png
. www.themealdb.com/images/ingredients/Lime-Small.png