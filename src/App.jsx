import './App.css';
import { useState } from 'react';
import PokedexList from './Components/PokedexList';
import PokedexDetails from './Components/PokedexDetails';
import Navbar from './Container/Navbar';

function App() {
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  return (
    <div className="App">
      <Navbar />
      <PokedexList setSelectedPokemonId={setSelectedPokemonId} />
      {selectedPokemonId && (
        <PokedexDetails key={selectedPokemonId} pokemonId={selectedPokemonId} />
      )}
    </div>
  );
}

export default App;
