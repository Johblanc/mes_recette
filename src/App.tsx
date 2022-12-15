
import './App.css';
import './customs/maquette/maquette.css';
import { RechercheNom } from './components/Nom/rechercheNom';
import { RechercheNom2 } from './components/Nom/test_fetch';
import { TestConvertObject } from './components/Nom/test_object';
import { Category } from './components/categorie/Category';
import { NavBar } from './components/header/NavBar';
import "./NavBar.css";
import { HandleCategory } from './components/categorie/FilterByCategory';

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <RechercheNom />
      <TestConvertObject /> */}
      <Category />
      <HandleCategory/>
    
    

    </div>
  );
}

export default App;









/*InfoBox data={MAQUETTE}*/