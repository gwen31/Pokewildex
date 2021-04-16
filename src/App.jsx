import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Container/Navbar';
import PokedexList from './Components/PokedexList';
import Comparator from './Components/Comparator';
import RandomTeam from './Components/RandomTeam';
import StaffList from './Components/StaffList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main">
          <Switch>
            <Route path="/PokedexList">
              <PokedexList />
            </Route>
            <Route path="/RandomTeam">
              <RandomTeam />
            </Route>
            <Route path="/Comparator">
              <Comparator />
            </Route>
            <Route path="/StaffList">
              <StaffList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
