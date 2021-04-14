import Comparator from '../Components/Comparator';
import PokedexList from '../Components/PokedexList';
import Randomteam from '../Components/RandomTeam';
import TypesList from '../Components/TypesList';
import StaffList from '../Components/StaffList';

const Navbar = () => (
  <div>
    <Comparator />
    <PokedexList />
    <Randomteam />
    <TypesList />
    <StaffList />
  </div>
);

export default Navbar;
