import RestaurantApi from '../../data/restaurant-api';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="daftar-restoran container">
        <h2>Detail Restoran</h2>
        <p>Temukan berbagai macam cabang gerai kami di seluruh penjuru dunia</p>
        <div class="detailrestoran" id="detailrestoran">
          <div id="loader" class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <div id="container-pesan-error" style="display: none">
            <p class="pesan-error">Error, Silakan Periksa Koneksi Internet Anda :(</p>
          </div>
        </div>
      </div>
      <div id="favoriteButtonContainer"></div>
      `;
  },

  async afterRender() {
    const loader = document.querySelector('#loader');
    const errorContainer = document.querySelector('#container-pesan-error');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantApi.detailRestaurant(url.id);
    loader.style.display = 'none';
    const restaurantsContainer = document.querySelector('#detailrestoran');
    if (restaurants.error === true) {
      errorContainer.style.display = 'block';
    }
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurants.restaurant);
    console.log(restaurants);

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: restaurants.restaurant.id,
        name: restaurants.restaurant.name,
        pictureId: restaurants.restaurant.pictureId,
        address: restaurants.restaurant.address,
        city: restaurants.restaurant.city,
        categories: restaurants.restaurant.categories,
        rating: restaurants.restaurant.rating,
        foods: restaurants.restaurant.menus.foods,
        drinks: restaurants.restaurant.menus.drinks,
        customerReviews: restaurants.restaurant.customerReviews,
        description: restaurants.restaurant.description,
      },
    });
  },
};

export default Detail;
