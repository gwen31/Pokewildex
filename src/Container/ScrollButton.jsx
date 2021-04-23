import PokeballArrow from './images/icons/poke-ball-arrow.png';
import './ScrollButton.css';

export default function ScrollButton() {
  return (
    <div className="go-up-btn">
      <a href="#top">
        <img src={PokeballArrow} className="go-up-icon" alt="scroll up icon" />
      </a>
    </div>
  );
}
