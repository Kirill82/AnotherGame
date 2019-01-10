import ScreenshotsTemplate from './screenshots.html';
import './screenshots.css';

class Screenshots {
  static render() {
    const navHTML = document.createElement('section');
    navHTML.className = 'app-screenshots';
    navHTML.innerHTML = ScreenshotsTemplate;
    document.body.appendChild(navHTML);
  }
}

export default Screenshots;
