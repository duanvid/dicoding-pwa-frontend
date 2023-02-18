const DrawerInitiator = {
  init({
    button, drawer, overlay, favButton,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer({ event, drawer, overlay });
    });

    overlay.addEventListener('click', (event) => {
      this._closeDrawer({ event, drawer, overlay });
    });

    favButton.addEventListener('click', (event) => {
      this._closeDrawer({ event, drawer, overlay });
    });
  },

  _toggleDrawer({ event, drawer, overlay }) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    overlay.classList.toggle('closed');
  },

  _closeDrawer({ event, drawer, overlay }) {
    event.stopPropagation();
    drawer.classList.remove('open');
    overlay.classList.add('closed');
  },
};

export default DrawerInitiator;
