import RestaurantsSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavbuttonPresenter from '../../utils/fav-button-presenter';
import Database from '../../utils/favorite-restaurant-idb';
import '../templates/restaurant-detail';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant_detail"></div>
        <div id='favButtonContainer'></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.restaurantDetail(url.id);
    const container = document.getElementById('restaurant');
    const restaurantDetailContainer = document.createElement('restaurant-detail');
    restaurantDetailContainer.restaurantDetail = restaurant;
    container.append(restaurantDetailContainer);

    FavbuttonPresenter.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      favoriteRestaurants: Database,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
