import CONFIG from '../../globals/config';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class='resto__card'>
      <div class='card__header'>
        <a
          href='#/detail/${this._restaurant.id}'
          aria-label='${this._restaurant.name}'
        >
            <h3>${this._restaurant.name}</h3>
            <div class='resto__rating'>
              <small>Kota ${this._restaurant.city}</small>
              <small>Rating  ${this._restaurant.rating} ★</small>
            </div>
        </a>
      </div>
      <div class='resto__image'>
        <img
          src=${CONFIG.BASE_IMAGE_URL}small/${this._restaurant.pictureId}
          class='cover__image'
          alt='${this._restaurant.name} picture'
          loading='lazy'
        />
      </div>
      <div class='card__footer'>
        <p
          class='description'
          id=${this._restaurant.id}
        >
          ${this._restaurant.description}
        </p>
      </div>
    </div>
        `;
    const onHover = () => {
      const description = document.getElementById(`${this._restaurant.id}`);
      description.setAttribute('style', 'max-height: 60px');
    };

    const onHoverEnd = () => {
      const description = document.getElementById(`${this._restaurant.id}`);
      description.setAttribute('style', 'max-height: 0');
    };

    this.addEventListener('mouseover', onHover);
    this.addEventListener('mouseout', onHoverEnd);
  }
}

customElements.define('restaurant-item', RestaurantItem);
