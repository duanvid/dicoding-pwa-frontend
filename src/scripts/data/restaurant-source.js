import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
  static async homepage() {
    const response = await fetch(API_ENDPOINT.HOMEPAGE);
    const data = await response.json();
    return data.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const data = await response.json();
    return data.restaurant;
  }
}

export default RestaurantsSource;
