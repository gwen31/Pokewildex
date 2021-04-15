import Comparator from '../Components/Comparator';
import Randomteam from '../Components/RandomTeam';
import TypesList from '../Components/TypesList';
import StaffList from '../Components/StaffList';
import './Header.css';
import imgLogo from './images/logo.png';

function Header() {
  return (
    <div>
      <img className="logo" src={imgLogo} alt="" />
      <Comparator />
      <Randomteam />
      <TypesList />
      <StaffList />
    </div>
  );
}

export default Header;
