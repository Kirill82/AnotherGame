import HomeTemplate from './home.html';
import './home.css';

class Home {
  static render() {
    const navHTML = document.createElement('section');
    navHTML.className = 'app-home';
    navHTML.innerHTML = HomeTemplate;
    document.body.appendChild(navHTML);
  }
}

export default Home;
