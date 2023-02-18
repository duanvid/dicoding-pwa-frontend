import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import Database from '../src/scripts/utils/favorite-restaurant-idb';

describe('Favorite Restaurant Database Contract Test Implementation', () => {
  afterEach(async () => {
    (await Database.getAllRestaurants()).forEach(async (restaurant) => {
      await Database.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(Database);
});
