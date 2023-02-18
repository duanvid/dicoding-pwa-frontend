import CONFIG from '../../globals/config';
import menu from './menus-template';
import './restaurant-review-container';

class RestaurantDetail extends HTMLElement {
  set restaurantDetail(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class='row'>
      <div class='resto-detail'>
          <div class='main-detail'>
              <div class='main-detail-title'>
                  <h3>${this._restaurant.name}</h3>
                  <p>Rating: ${this._restaurant.rating}</p>
                  <p><small>${this._restaurant.address} kota ${this._restaurant.city}</small></p>
              </div>
                <picture>
                    <source media='(max-width: 600px)' srcset=${CONFIG.BASE_IMAGE_URL}small/${this._restaurant.pictureId}>
                    <img src=${CONFIG.BASE_IMAGE_URL}medium/${this._restaurant.pictureId} class='resto-pic-detail' alt='foto restaurant ${this._restaurant.name}'>
                </picture>
              <h4>Tentang ${this._restaurant.name}</h4>
              <p class='description__detail'>${this._restaurant.description}</p>
          </div>
      </div>
      <div class='restaurant-menu'>
          <h3 class='menu-label'>Menu</h3>
          <div class='menu-category'>
              ${menu(this._restaurant.menus)}
          </div>
      </div>
    </section>

    <section class='resto-review'>
        <div class='user__review'>
            <div class='user__review__header'>
                <h3 class='user__review__title'>Review Restoran Oleh Pengguna</h3>
            </div>
            <div class='user__review__body'>
                <restaurant-review></restaurant-review>
            </div>
        </div>
        <div class='add__review'>
            <div class='add__review__header'>
                <h3 class='add__review__title'>Tambahkan Review Untuk Restaurant Ini</h3>
            </div>
            <form class='review__form'>
                <div class='review__body'>
                <input
                    type='text'
                    class='input__review'
                    id='input__review__name'
                    placeholder='Nama'
                />
                <textarea
                    class='input__review'
                    id='input__review__data'
                    placeholder='Masukkan Review'
                    rows='5'
                ></textarea>
                </div>
                <button
                    type='submit'
                    class='add__review__button'
                    id='submit__review__button'>
                    Tambahkan Review
                </button>
            </form>
        </div>
    </section>`;

    const reviewContainer = this.querySelector('restaurant-review');
    reviewContainer.reviews = this._restaurant.customerReviews;

    this.querySelector('#submit__review__button').addEventListener('click', async (event) => {
      event.preventDefault();

      const dataReview = {
        id: this._restaurant.id,
        name: this.querySelector('#input__review__name').value,
        review: this.querySelector('#input__review__data').value,
      };

      const reviews = async () => {
        const response = await fetch(`${CONFIG.BASE_URL}review`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataReview),
        });

        const data = await response.json();
        return data.customerReviews;
      };

      reviewContainer.reviews = await reviews();
    });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
