

import './App.css';
import './customs/maquette/maquette.css';
import { RechercheNom } from './components/Nom/rechercheNom';
import { RechercheNom2 } from './components/Nom/test_fetch';
import { TestConvertObject } from './components/Nom/test_object';
import { Favoris } from './components/favoris/Favoris';
import { Recette } from './components/recette/Recette';

function App() {
  return (
    <div className="App">
        <Recette id={'52772'} />
    </div>
  );
}

export default App;
