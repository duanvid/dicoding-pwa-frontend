Feature('liking restaurant');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Liking Restaurant', async ({ I }) => {
  I.see('Belum Ada Restaurant Favorit Tersimpan', '.empty-fav');

  I.amOnPage('/');

  I.waitForElement('.card__header a', 2);
  I.seeElement('.card__header a');

  const firstRestaurant = locate('.card__header a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.waitForElement('#favButton', 2);

  I.seeElement('#favButton');
  I.click('#favButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');

  const likedRestaurant = await I.grabTextFrom('.card__header a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurant);
});

Scenario('Unlike restaurant', async ({ I }) => {
  I.see('Belum Ada Restaurant Favorit Tersimpan', '.empty-fav');

  I.amOnPage('/');
  I.waitForElement('.card__header a', 2);
  I.seeElement('.card__header a');

  const firstRestaurant = locate('.card__header a').first();
  I.click(firstRestaurant);

  I.waitForElement('#favButton', 2);

  I.seeElement('#favButton');
  I.click('#favButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');

  I.click(firstRestaurant);

  I.waitForElement('#favButton', 2);
  I.seeElement('#favButton');
  I.click('#favButton');

  I.amOnPage('/#/favorite');
  I.dontSee('restaurant-item');
  I.see('Belum Ada Restaurant Favorit Tersimpan', '.empty-fav');
});

Scenario('Add Review', async ({ I }) => {
  I.see('Belum Ada Restaurant Favorit Tersimpan', '.empty-fav');

  I.amOnPage('/');

  I.waitForElement('.card__header a', 2);
  I.seeElement('.card__header a');

  const firstRestaurant = locate('.card__header a').first();
  I.click(firstRestaurant);
  I.waitForElement('#input__review__name', 2);
  const nama = 'Bukan Bot';

  I.appendField('#input__review__name', nama);
  I.appendField('#input__review__data', 'ini review menggunakan test end to end');

  I.click('#submit__review__button');

  I.wait(5); // ubah ke waktu lebih lama jika waktu respon server lebih dari 5 detik

  const newReview = locate('.review__detail p').last();
  const newReviewName = await I.grabTextFrom(newReview);

  assert(nama, newReviewName);
});
