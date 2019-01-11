import './index.css';

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './screens/navigation/navigation';
import ModalDialog from './components/modal-dialog/modal-dialog';
import Home from './screens/home/home';
import About from './screens/about/about';
import Developer from './screens/developer/developer';
import Screenshots from './screens/screenshots/screenshots';

const startApp = () => {
  Navigation.render();
  ModalDialog.render();
  Home.render();
  About.render();
  Screenshots.render();
  Developer.render();
};

startApp();

/* let nav = new Navigation(); */

/* document.body.appendChild(nav.render()); */
