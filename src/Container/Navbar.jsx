import Comparator from '../Components/Comparator';
import Randomteam from '../Components/RandomTeam';
import TypesList from '../Components/TypesList';
import StaffList from '../Components/StaffList';

const Navbar = () => (
  <div>
    <h1>PokeWilDex</h1>
    <nav className="sidebar">
      <header>My App</header>
      <ul>
        <li>
          <a href="toto">
            <img
              className="sidebar-icon"
              src="images/icons/pokedex.png"
              alt=""
            />
            Pokedex
          </a>
        </li>
        <li>
          <a href="toto">
            <img src="images/icons/random.png" alt="" />
            Team Generator
          </a>
        </li>
        <li>
          <a href="toto">
            <img src="images/icons/balance.png" alt="" />
            Comparator
          </a>
        </li>
        <li>
          <a href="toto">
            <img src="images/icons/versus.png" alt="" />
            Combat
          </a>
        </li>
        <li>
          <a href="toto">
            <img src="images/icons/cap.png" alt="" />
            Staff
          </a>
        </li>
      </ul>
    </nav>
    <Comparator />
    <Randomteam />
    <TypesList />
    <StaffList />
  </div>
);

export default Navbar;
