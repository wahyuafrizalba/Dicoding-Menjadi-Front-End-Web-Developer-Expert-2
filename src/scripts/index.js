import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  hamburger: document.querySelector('.hamburger'),
  navMenu: document.querySelector('.navbar-menu'),
  content: document.querySelector('#mainContent'),
  backgroundNavbar: document.querySelector('.background-navbar'),
  navbar: document.querySelector('.navbar'),
  navLinks: document.querySelectorAll('.navbar-link'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
