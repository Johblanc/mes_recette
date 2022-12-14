

import './App.css';
import './customs/maquette/maquette.css';
import { RechercheNom } from './components/Nom/rechercheNom';
import { SearchByCat} from './components/Categorie/SearchByCat';

function App() {
  return (
    <div className="App">
        <RechercheNom /> 
        <SearchByCat/>
    </div>
  );
}

export default App;









/*InfoBox data={MAQUETTE}*/