class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class='hero-section'>
            <div class='hero-tag'>
                <h2 class='large'>Temukan Makanan Pedas Favoritmu disini</h2>
                <p>Dan buat setiap momen makanmu menjadi lebih berselera</p>
            </div>
            <picture class='hero'>
              <source
                media='(max-width: 650px)'
                type='image/webp'
                srcset='./images/heros/hero-small.webp'>
              <source
                media='(max-width: 650px)'
                type='image/jpeg'
                srcset='./images/heros/hero-small.jpg'>
              <source
                media='(max-width: 1300px)'
                type='image/webp'
                srcset='./images/heros/hero-large.webp'>
              <source
                media='(max-width: 1300px)'
                type='image/jpeg'
                srcset='./images/heros/hero-large.jpg'>
              <source
                media='(max-width: 1800px)'
                type='image/webp'
                srcset='./images/heros/hero-larger.webp'>
              <source
                media='(max-width: 1800px)'
                type='image/jpeg'
                srcset='./images/heros/hero-larger.jpg'>
              <img
                class="hero__image"
                src="./images/heros/hero-larger.jpg"
                alt="hero image">
            </picture>
        </div>
        `;
  }
}

customElements.define('hero-section', Hero);
