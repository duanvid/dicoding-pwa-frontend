import { openDB } from 'idb';

const STORE_NAME = 'restaurants-store';
const OBJECT_STORE_NAME = 'restaurant';

const dbPromise = openDB(STORE_NAME, 1, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const Database = {
  async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async getRestaurant(id) {
    if (!id) {
      return false;
    }

    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  async putRestaurant(restaurant) {
    if (!Object.prototype.hasOwnProperty.call(restaurant, 'id')) {
      return false;
    }

    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
};

export default Database;
