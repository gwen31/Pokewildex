import { useState } from 'react';
import PokedexList from './Components/PokedexList';
import PokedexDetails from './Components/PokedexDetails';
import Navbar from './Container/Navbar';
import './App.css';

function App() {
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <PokedexList setSelectedPokemonId={setSelectedPokemonId} />
        {selectedPokemonId && (
          <PokedexDetails
            key={selectedPokemonId}
            pokemonId={selectedPokemonId}
          />
        )}
      </div>
    </div>
  );
}

export default App;
