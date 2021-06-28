const DrawerInitiator = {
  init({
    button, drawer, content, backgroundNavbar, navbar, navLinks,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, button, drawer, navbar);
    });

    button.addEventListener('keydown', (event) => {
      this._keypresButton(event, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, button, drawer, navbar);
    });

    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', (event) => {
        this._closeDrawer(event, button, drawer, navbar);
      });
    });

    window.addEventListener('scroll', (event) => {
      this._onScroll(event, backgroundNavbar);
    });
  },

  _toggleDrawer(event, button, drawer, navbar) {
    event.stopPropagation();
    button.classList.toggle('active');
    drawer.classList.toggle('active');
    navbar.classList.toggle('active');
  },

  _keypresButton(event, button) {
    event.stopPropagation();
    if (event.code === 'Space' || event.code === 'Enter') {
      button.click();
    }
  },

  _closeDrawer(event, button, drawer, navbar) {
    event.stopPropagation();
    button.classList.remove('active');
    drawer.classList.remove('active');
    navbar.classList.remove('active');
  },

  _onScroll(event, backgroundNavbar) {
    event.stopPropagation();
    const scroll = document.documentElement.scrollTop;

    if (scroll > 0) {
      backgroundNavbar.classList.add('scrolled');
    } else {
      backgroundNavbar.classList.remove('scrolled');
    }
  },
};

export default DrawerInitiator;
