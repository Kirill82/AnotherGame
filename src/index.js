import './reset.css';

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

// import Header from './header/header';

import Navigation from './navigation/navigation';
import ModalDialog from './modal-dialog/modal-dialog';

const startApp = () => {
  Navigation.render();
  ModalDialog.render();
};

startApp();

/* let nav = new Navigation(); */

/* document.body.appendChild(nav.render()); */
