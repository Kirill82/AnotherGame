import ChooseTemplate from './chooseName.html';
import './chooseName.css';

class ChooseName {
  static render() {
    const navHTML = document.createElement('section');
    navHTML.className = 'ChooseName';
    navHTML.innerHTML = ChooseTemplate;
    document.body.appendChild(navHTML);
  }
}

export default ChooseName;