import PlayTemplate from './play.html';
import './play.css';

class Play {
  static render() {
    const navHTML = document.createElement('section');
    navHTML.className = 'app-play';
    navHTML.innerHTML = PlayTemplate;
    document.body.appendChild(navHTML);
  }
}

export default Play;
