/* eslint-disable max-len */
import RestoDbSource from '../../data/restodb-source';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">Home Page</h2>        
        <div id="restaurants" class="restaurants">
        </div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestoDbSource.restoList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default HomePage;
