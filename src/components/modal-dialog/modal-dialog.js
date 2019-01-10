import ModalTemplate from './modal-dialog.html';
import './modal-dialog.css';

class ModalDialog {
  static render() {
    const navHTML = document.createElement('section');
    navHTML.className = 'modal-dialog';
    navHTML.innerHTML = ModalTemplate;
    document.body.appendChild(navHTML);
  }
}

export default ModalDialog;
