import PokeballArrow from './images/icons/poke-ball-arrow.png';
import './ScrollButton.css';

const mybutton = document.getElementsByClassName('go-up-btn');
window.onscroll = () => {
  if (
    document.body.scrollTop > 400
    || document.documentElement.scrollTop > 400
  ) {
    mybutton[0].style.display = 'block';
  } else {
    mybutton[0].style.display = 'none';
  }
};

function ScrollButton() {
  return (
    <div className="go-up-btn" id="scroll-btn">
      <a href="#top">
        <img src={PokeballArrow} className="go-up-icon" alt="scroll up icon" />
      </a>
    </div>
  );
}
export default ScrollButton;
