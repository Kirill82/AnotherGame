import DeveloperTemplate from './developer.html';
import './developer.css';
import sc4 from './img1.jpg';

class Developer {
  static render() {
    const navHTML = document.createElement('section');
    navHTML.className = 'app-developer';
    navHTML.id = 'developer';
    navHTML.innerHTML = DeveloperTemplate;
    document.body.appendChild(navHTML);
  }
}

export default Developer;
