import { Category } from './components/categorie/AllCategories';
import './App.css';
import { SearchByIngredients } from './components/ingredients/SearchByIngredients';
import './customs/maquette/maquette.css';
import { TestConvertObject } from './components/Nom/test_object';
import { NavBar } from './components/header/NavBar';
import { FilterByCategory } from './components/categorie/searchByCategory';
import { RechercheNom } from './components/Nom/RechercheNom';
function App() {

  
  return (
    <div className="App">
      <NavBar/>
      <RechercheNom/> 
      {/* <TestConvertObject /> */}
      <Category />
      <FilterByCategory/>

    </div>
  );
}

export default App;









/*InfoBox data={MAQUETTE}*/