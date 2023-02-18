class Filter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div>
            <h3>Filter Restaurant</h3>
            <input type='checkbox'>
        </div>
        `;
  }
}

customElements.define('filter', Filter);
