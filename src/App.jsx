import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Container/Navbar';
import PokedexList from './Components/PokedexList';
import Comparator from './Components/Comparator';
import RandomTeam from './Components/RandomTeam';
import StaffList from './Components/StaffList';
import ScrollButton from './Container/ScrollButton';
import Header from './Container/Header';
import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <Router>
        <section id="top" />
        <ScrollButton />
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
    </div>
  );
}

export default App;
