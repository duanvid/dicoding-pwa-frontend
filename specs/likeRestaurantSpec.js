import Database from '../src/scripts/utils/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addFavButtonContainer = () => {
    document.body.innerHTML = '<div id="favButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavButtonContainer();
  });

  it('Should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="add this restaurant to favorite"]')).toBeTruthy();
  });

  it('Should not show the unlike button when the restaurant not liked before', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="remove from favorite"]')).toBeFalsy();
  });

  it('Should be able to like the restaurant', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#favButton').dispatchEvent(new Event('click'));
    const restaurant = await Database.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    Database.deleteRestaurant(1);
  });

  it('should not add restaurant again when its already liked', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    await Database.putRestaurant({ id: 1 });

    document.querySelector('#favButton').dispatchEvent(new Event('click'));

    expect(await Database.getAllRestaurants()).toEqual([{ id: 1 }]);

    Database.deleteRestaurant(1);
  });

  it('Should not add restaurant when it has no id', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({});

    document.querySelector('#favButton').dispatchEvent(new Event('click'));
    expect(await Database.getAllRestaurants()).toEqual([]);
  });
});
