import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Container/Navbar';
import PokedexList from './Components/PokedexList';
import Comparator from './Components/Comparator';
import RandomTeam from './Components/RandomTeam';
import StaffList from './Components/StaffList';
import ScrollButton from './Container/ScrollButton';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <section id="top" />
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <PokedexList />
            </Route>
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
      <ScrollButton />
    </div>
  );
}

export default App;
