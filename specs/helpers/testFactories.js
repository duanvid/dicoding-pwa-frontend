import FavbuttonPresenter from '../../src/scripts/utils/fav-button-presenter';
import Database from '../../src/scripts/utils/favorite-restaurant-idb';

const createFavButtonPresenterWithRestaurant = async (restaurant) => {
  await FavbuttonPresenter.init({
    favButtonContainer: document.querySelector('#favButtonContainer'),
    favoriteRestaurants: Database,
    restaurant,
  });
};

export { createFavButtonPresenterWithRestaurant };
