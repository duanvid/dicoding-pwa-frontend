class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h1 class='app-name'>HotFoodFinder</h1>
        `;
  }
}

customElements.define('app-bar', AppBar);
