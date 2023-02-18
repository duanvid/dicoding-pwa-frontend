import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, drawer, overlay, content, favButton,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._overlay = overlay;
    this._content = content;
    this._favButton = favButton;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      overlay: this._overlay,
      favButton: this._favButton,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-to-content');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  }
}

export default App;
