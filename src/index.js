import './reset.css';

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

// import Header from './header/header';

import Navigation from './screens/navigation/navigation';
import ModalDialog from './components/modal-dialog/modal-dialog';
import Home from './screens/home/home';
import About from './screens/about/about';
import Developer from './screens/developer/developer';

const startApp = () => {
  Navigation.render();
  ModalDialog.render();
  Home.render();
  About.render();
  Developer.render();
};

startApp();

/* let nav = new Navigation(); */

/* document.body.appendChild(nav.render()); */
