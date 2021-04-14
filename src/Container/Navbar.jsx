import Comparator from '../Components/Comparator';
import Randomteam from '../Components/RandomTeam';
import TypesList from '../Components/TypesList';
import StaffList from '../Components/StaffList';

const Navbar = () => (
  <div>
    <h1>PokeWilDex</h1>
    <Comparator />
    <Randomteam />
    <TypesList />
    <StaffList />
  </div>
);

export default Navbar;
