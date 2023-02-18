class RestaurantItemSkeleton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class='resto__card'>
            <div class='card__header'>
                <div class='skeleton skeleton-text'></div>
                <div class='skeleton skeleton-text'></div>
            </div>
            <div class='resto__image'>
                <img class='skeleton skeleton-image' alt=''>
            </div>
            <div class='card__footer'>
            </div>
        </div>`;
  }
}

customElements.define('restaurant-skeleton', RestaurantItemSkeleton);
