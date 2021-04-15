import PokedexList from './Components/PokedexList';
import Navbar from './Container/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <PokedexList />
      </div>
    </div>
  );
}

export default App;
