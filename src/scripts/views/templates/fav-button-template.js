const createFavButtonTemplate = () => `
<button aria-label='add this restaurant to favorite' id='favButton' class='fav'>
    <i class='fa fa-heart-o' aria-hidden='true'></i>
</button>
`;

const createFavedButtonTemplate = () => `
<button aria-label='remove from favorite' id='favButton' class='fav'>
    <i class='fa fa-heart' aria-hidden='true'></i>
</button>
`;

export { createFavButtonTemplate, createFavedButtonTemplate };
