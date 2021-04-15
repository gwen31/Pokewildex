import Comparator from '../Components/Comparator';
import Randomteam from '../Components/RandomTeam';
import TypesList from '../Components/TypesList';
import StaffList from '../Components/StaffList';
import './Navbar.css';
import imgPokedex from './images/icons/pokedex.png';
import imgRandom from './images/icons/random.png';
import imgVersus from './images/icons/versus.png';
import imgCap from './images/icons/cap.png';
import imgBalance from './images/icons/balance.png';
import SearchBar from '../Components/SearchBar';
import imgLogo from './images/logo.png';

function Navbar() {
  return (
    <div>
      <div className="sidebar">
        <img className="logo" src={imgLogo} alt="" />
        <SearchBar />
        <ul>
          <li>
            <a href="toto">
              <img className="sidebar-icon" src={imgPokedex} alt="" />
              Pokedex
            </a>
          </li>
          <li>
            <a href="toto">
              <img className="sidebar-icon" src={imgRandom} alt="" />
              Team Generator
            </a>
          </li>
          <li>
            <a href="toto">
              <img className="sidebar-icon" src={imgBalance} alt="" />
              Comparator
            </a>
          </li>
          <li className="disable">
            <a href="toto">
              <img className="sidebar-icon" src={imgVersus} alt="" />
              Combat
            </a>
          </li>
          <li>
            <a href="toto">
              <img className="sidebar-icon" src={imgCap} alt="" />
              Staff
            </a>
          </li>
        </ul>
      </div>
      <Comparator />
      <Randomteam />
      <TypesList />
      <StaffList />
    </div>
  );
}

export default Navbar;
