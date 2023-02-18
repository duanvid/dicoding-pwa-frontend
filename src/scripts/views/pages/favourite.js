import Database from '../../utils/favorite-restaurant-idb';
import '../templates/restaurant-item';

const Favorite = {
  async render() {
    return `
        <div id='favorite-list' class='favorite'></div>
        <div id='empty-list'></div>`;
  },

  async afterRender() {
    const restaurants = await Database.getAllRestaurants();
    const favoriteContainer = document.querySelector('#favorite-list');
    const emptyListContainer = document.querySelector('#empty-list');

    if (!restaurants.length) {
      emptyListContainer.innerHTML = '<h2 class="empty-fav">Belum Ada Restaurant Favorit Tersimpan</h2>';
    }

    restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;
      favoriteContainer.append(restaurantItemElement);
    });
  },
};

export default Favorite;
