import NavTemplate from './navigation.html';
import './navigation.css';

class Navigation {
  static render() {
    const navHTML = document.createElement(`section`);
    navHTML.className = 'app-navigation';
    navHTML.innerHTML = NavTemplate;
    document.body.appendChild(navHTML);
  }
}

export default Navigation;
