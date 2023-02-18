class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '';
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    const restaurantItemElement = document.createElement('restaurant-item');
    restaurantItemElement.restaurant = this._restaurants;
    this.append(restaurantItemElement);
  }
}

customElements.define('restaurant-list', RestaurantList);
