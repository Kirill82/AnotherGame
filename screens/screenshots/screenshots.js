import ScreenshotsTemplate from './screenshots.html';
import './screenshots.css';

import sc1 from './screenshot1.jpg';
import sc2 from './screenshot2.jpg';
import sc3 from './screenshot3.jpg';

class Screenshots {
  static render() {
    const navHTML = document.createElement('section');
    navHTML.className = 'app-screenshots';
    navHTML.id = 'screenshots';
    navHTML.innerHTML = ScreenshotsTemplate;
    document.body.appendChild(navHTML);
  }
}

export default Screenshots;
