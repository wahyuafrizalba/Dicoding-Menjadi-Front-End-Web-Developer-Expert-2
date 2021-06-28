import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    hamburger, navMenu, content, backgroundNavbar, navbar, navLinks,
  }) {
    this._button = hamburger;
    this._drawer = navMenu;
    this._content = content;
    this._backgroundNavbar = backgroundNavbar;
    this._navbar = navbar;
    this._navLinks = navLinks;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      backgroundNavbar: this._backgroundNavbar,
      navbar: this._navbar,
      navLinks: this._navLinks,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    // console.log(url);
    const page = routes[url];
    // console.log(page);
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
