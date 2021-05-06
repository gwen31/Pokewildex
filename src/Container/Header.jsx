import './Header.css';
import imgLogo from './images/logo.png';

function Header() {
  return (
    <header>
      <img className="logo-header" src={imgLogo} alt="" />
    </header>
  );
}

export default Header;
