import PokedexList from './Components/PokedexList';
import Navbar from './Container/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="main">
        <PokedexList />
      </div>
    </div>
  );
}

export default App;
