class RestaurantReview extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this._render();
  }

  _render() {
    this.innerHTML = '';
    this._reviews.forEach((review) => {
      this.innerHTML += `
      <div class='review__item'>
        <div class='review__icon'>
          <img src='./icons/quote.png' alt=''>
        </div>
        <div class='review__detail'>
            <p>"${review.review}"</p>
            <div>
              <p><small>${review.date}</small></p>
              <p>${review.name}</p>
            </div>
        </div>
      </div>`;
    });
  }
}

customElements.define('restaurant-review', RestaurantReview);
