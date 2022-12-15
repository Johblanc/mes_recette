

import './App.css';
import './customs/maquette/maquette.css';
import { RechercheNom2 } from './components/Nom/test_fetch';
import { TestConvertObject } from './components/Nom/test_object';
import { Category } from './components/categorie/Category';
import { NavBar } from './components/header/NavBar';
import "./NavBar.css";
import { RechercheNom } from './components/Nom/RechercheNom';
function App() {
  return (
    <div className="App">
      {// <NavBar />
      <RechercheNom/>
      /*<TestConvertObject />*/ }
      {/*<Category />*/}

    </div>
  );
}

export default App;









/*InfoBox data={MAQUETTE}*/