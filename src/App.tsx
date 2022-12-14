

import './App.css';
import './customs/maquette/maquette.css';
import { RechercheNom } from './components/Nom/rechercheNom';
import { RechercheNom2 } from './components/Nom/test_fetch';
import { SearchByCat} from './components/Categorie/SearchByCat';

function App() {
  return (
    <div className="App">
        <RechercheNom />
        <RechercheNom2/>
        <SearchByCat/>
    </div>
  );
}

export default App;









/*InfoBox data={MAQUETTE}*/