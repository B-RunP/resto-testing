/* eslint-disable max-len */
import CONFIG from '../../globals/config';
import DetailHelper from '../../utils/detail-helper';

const createRestaurantDetailTemplate = (restaurant) => `
        <h2 class="restaurant__title">${restaurant.name}</h2>
        <img class="restaurant__poster" src=${CONFIG.BASE_IMAGE_URL + restaurant.pictureId} alt=${restaurant.name}/>
        <div class="restaurant__info">
          <h3>Information</h3>
          <h3>City</h3>
          <p>${restaurant.city}</p>
          <h3>Address</h3>
          <p>${restaurant.address}</p>
          <h3>Rating</h3>
          <p>⭐️ ${restaurant.rating}</p>
          <h3>Description</h3>
          <p>${restaurant.description} minutes</p>
          <br>
          <h3>Makanan</h3>
          <ul>
            ${restaurant.menus.foods
      .map(
          (food) => `
                  <p class="food-item" aria-label="${food.name}.">${food.name}</p>
                `,
      ).join('')}
      </ul>
      <br>
      <h3>Minuman</h3>
          <ul>
            ${restaurant.menus.drinks
      .map(
          (drink) => `
                  <p class="drink-item" aria-label="${drink.name}.">${drink.name}</p>
                `,
      ).join('')}
      </ul>
      <br>
      <h3>Review</h3>
      ${DetailHelper.eachCustomersReview(restaurant)}
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
        <div class="restaurant-item__header">
            <img class="restaurant-item__header__poster" src=${CONFIG.BASE_IMAGE_URL + restaurant.pictureId} alt=${restaurant.name} />
            <div class="restaurant-item__header__rating">
                <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
            </div>
        </div>
        <div class="restaurant-item__content">
            <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <p>${restaurant.description}</p>
        </div>
    </div>  
`;

const createCustomerReviewTemplate = (customerReview) => `
        <h4>${customerReview.name} | <i>${customerReview.date}</i></h4>
        <p>${customerReview.review}</p>
            `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createCustomerReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate};
