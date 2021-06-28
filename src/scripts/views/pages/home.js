import RestaurantApi from '../../data/restaurant-api';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="daftar-restoran container">
        <h2>Jelajahi Restoran</h2>
        <p>Temukan berbagai macam cabang gerai kami di seluruh penjuru dunia</p>
        <div class="restoran" id="restoran">
          
        </div>
        <div id="loader" class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <div id="container-pesan-error" style="display: none">
          <p class="pesan-error">Error, Silakan Periksa Koneksi Internet Anda :(</p>
        </div>
      </div>
      `;
  },

  async afterRender() {
    const loader = document.querySelector('#loader');
    loader.style.display = 'block';
    const restaurants = await RestaurantApi.listRestaurant();
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

export default Home;
