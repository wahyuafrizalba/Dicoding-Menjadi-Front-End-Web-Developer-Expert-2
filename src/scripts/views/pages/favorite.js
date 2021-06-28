import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="daftar-restoran container">
        <h2>Jelajahi Restoran</h2>
        <p>Restoran Favorit Anda</p>
        <div class="restoran" id="restoran">
          
        </div>
        <div id="loader" class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <div id="container-pesan-error" style="display: none">
          <p class="pesan-error">Error, Data restoran favorit Anda tidak ditemukan :(</p>
        </div>
      </div>
      `;
  },

  async afterRender() {
    const loader = document.querySelector('#loader');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    loader.style.display = 'none';
    const restaurantsContainer = document.querySelector('#restoran');
    const pesanErrorContainer = document.querySelector('#container-pesan-error');
    if (restaurants.length === 0) {
      pesanErrorContainer.style.display = 'block';
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
