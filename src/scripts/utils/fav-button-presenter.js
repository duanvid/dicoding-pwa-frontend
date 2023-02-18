import 'regenerator-runtime';
import { createFavButtonTemplate, createFavedButtonTemplate } from '../views/templates/fav-button-template';

const FavbuttonPresenter = {
  async init({ favButtonContainer, favoriteRestaurants, restaurant }) {
    this._favButtonContainer = favButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFaved();
    } else {
      this._renderFav();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderFav() {
    this._favButtonContainer.innerHTML = createFavButtonTemplate();

    const favButton = document.querySelector('#favButton');
    favButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFaved() {
    this._favButtonContainer.innerHTML = createFavedButtonTemplate();

    const favButton = document.querySelector('#favButton');
    favButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavbuttonPresenter;
