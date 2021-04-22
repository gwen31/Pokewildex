import imgPokeBallMini from '../Container/images/icons/poke-ball-mini.png';
import './LoadingElement.css';

function LoadingElement() {
  return (
    <div className="loading-element">
      <img
        className="load-pokeball-mini"
        src={imgPokeBallMini}
        alt="pokeball"
      />
      <p>Loading</p>
    </div>
  );
}

export default LoadingElement;
