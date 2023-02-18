const foods = (foodsType) => {
  let foodItem = '';
  foodsType.forEach((food) => {
    foodItem += `
        <li class='food__card'>
          <img src='./icons/food-icon.png' class='food__picture' alt='' loading='lazy'>
            <p>${food.name}</p>
        </li>`;
  });

  return foodItem;
};

const drinks = (drinksType) => {
  let drinkItem = '';
  drinksType.forEach((drink) => {
    drinkItem += `
        <li class='food__card'>
          <img src='./icons/drink.png' class='food__picture' alt='' loading='lazy'>
            <p>${drink.name}</p>
        </li>`;
  });
  return drinkItem;
};

const menu = (menuType) => {
  const restaurantMenu = `
    <div class='menu-type'>
        <div class='food'>
            <h4>Foods</h4>
            <a href="https://www.flaticon.com/free-icons/food" title="food icons" target='_blank'><small>Food icons created by justicon - Flaticon</small></a>
            <ul>${foods(menuType.foods)}</ul>
        </div>
        <div class='food'>
            <h4>Drinks</h4>
            <a href="https://www.flaticon.com/free-icons/drink" title="drink icons" target='_blank'><small>Drink icons created by Smashicons - Flaticon</small></a>
            <ul>${drinks(menuType.drinks)}</ul>
    </div>`;
  return restaurantMenu;
};

export default menu;
