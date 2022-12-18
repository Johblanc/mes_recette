
import './App.css';
import { SearchByIngredients } from './components/ingredients/SearchByIngredients';
import './customs/maquette/maquette.css';
import { TestConvertObject } from './components/Nom/test_object';
import { NavBar } from './components/header/NavBar';
import { FilterByCategory } from './components/categorie/searchByCategory';
import { useState } from 'react';
import { Accueil } from './components/acceuilPage/acceuil';
import { RechercheNom } from './components/Nom/RechercheNom';
import { Category } from './components/categorie/AllCategories';

function App() {
  const [primePage, setPrimePage] = useState(false)
  
  return (
    <div className="App">
      <NavBar/>
      {primePage && <Accueil overLaGroup={''} headerTitre={''} sousTitre={''} bouttonChercher={''} recettesYummy={''} poke1={'poke-1.png'} poke1Props={''}/>}
      {!primePage && <div>
        
        <RechercheNom/> 
        <p> ----------------------------------------------------- </p>
        <Category />
        <FilterByCategory/>
        <p> ----------------------------------------------------- </p>
        <SearchByIngredients/>
      </div>}
    </div>
  );
}

export default App;



/*InfoBox data={MAQUETTE}*/