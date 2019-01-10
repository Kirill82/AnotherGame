import AboutTemplate from './about.html';
import './about.css';

class About {
  static render() {
    const navHTML = document.createElement('section');
    navHTML.className = 'app-about';
    navHTML.innerHTML = AboutTemplate;
    document.body.appendChild(navHTML);
  }
}

export default About;
