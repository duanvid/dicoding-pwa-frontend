import RestaurantsSource from '../../data/restaurant-source';
import '../templates/restaurant-item';
import '../templates/restaurant-item-skeleton';

const HomePage = {
  async render() {
    const SkeletonElement = () => {
      let skeleton = '';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 20; i++) {
        skeleton += '<restaurant-skeleton></restaurant-skeleton>';
      }
      return skeleton;
    };

    return `
        <hero-section></hero-section>
        <h2 class='explore_title'>Explore Restaurant</h2>
        <div id='restaurants-list'>
          ${await SkeletonElement()}
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.homepage();
    const restaurantList = document.getElementById('restaurants-list');

    restaurantList.innerHTML = '';

    restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;
      restaurantList.append(restaurantItemElement);
    });
  },
};

export default HomePage;
