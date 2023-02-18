import 'regenerator-runtime';
import '../styles/main.css';
import './components/appbar';
import './components/restaurant-list';
import './components/hero';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#navigationDrawer'),
  overlay: document.querySelector('#overlay'),
  content: document.querySelector('#main-content'),
  favButton: document.querySelector('#favbutton'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
