import Database from '../src/scripts/utils/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('unliking A Restaurant', () => {
  const addFavButtonContainer = () => {
    document.body.innerHTML = '<div id="favButtonContainer"></div>';
  };

  beforeEach(async () => {
    addFavButtonContainer();
    await Database.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await Database.deleteRestaurant(1);
  });

  it('Should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="remove from favorite"]')).toBeTruthy();
  });

  it('Should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="add this restaurant to favorite"]')).toBeFalsy();
  });

  it('Should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="remove from favorite"]').dispatchEvent(new Event('click'));

    expect(await Database.getAllRestaurants()).toEqual([]);
  });

  it('Should not throw error if the uliked restaurant is not in the list', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    await Database.deleteRestaurant(1);

    document.querySelector('[aria-label="remove from favorite"]').dispatchEvent(new Event('click'));
    expect(await Database.getAllRestaurants()).toEqual([]);
  });
});
