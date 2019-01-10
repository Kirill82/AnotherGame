import DeveloperTemplate from './developer.html';
import './developer.css';

class Developer {
  static render() {
    const navHTML = document.createElement('section');
    navHTML.className = 'app-developer';
    navHTML.innerHTML = DeveloperTemplate;
    document.body.appendChild(navHTML);
  }
}

export default Developer;
