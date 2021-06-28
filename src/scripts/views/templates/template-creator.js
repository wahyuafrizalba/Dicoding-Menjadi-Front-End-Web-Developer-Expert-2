import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
    <article>
        <a href="${`/#/detail/${restaurant.id}`}">
            <img src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}" alt="${restaurant.name}" tabindex="0">
            <p>
                <span class="fa fa-star checked"></span>
                ${restaurant.rating}
            </p>
            <div class="text">
                <h3 tabindex="0">${restaurant.name}</h3>
                <p class="kota">${restaurant.city}</p>
                <p class="deskripsi">${restaurant.description}</p>
            </div>
        </a>
    </article>
  `;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="info_restoran">
    <img src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="background_tabel_info_restoran">
        <table class="tabel_info_restoran">
            <tr>
                <th>Nama</th>
                <td class="normal_p">${restaurant.name}</td>
            </tr>
            <tr>
                <th>Alamat</th>
                <td class="normal_p">${restaurant.address}, ${restaurant.city}</td>
            </tr>
            <tr>
                <th>Kategori</th>
                <td class="normal_p">${restaurant.categories.map((category) => `${category.name}`).join(', ')}</td>
            </tr>
            <tr style="margin-bottom: 70px">
                <th>Rating</th>
                <td class="normal_p">${restaurant.rating}</td>
            </tr>
        </table>
        <br>
        <table class="tabel_info_restoran">
            <tr>
                <th>Makanan</th>
                <th>Minuman</th>
            </tr>
            <tr>
                <td style="vertical-align: top">${restaurant.menus.foods.map((food) => `<p class="normal_p">${food.name}</p>`).join('')}</td>
                <td style="vertical-align: top">${restaurant.menus.drinks.map((drink) => `<p class="normal_p">${drink.name}</p>`).join('')}</td>
            </tr>
        </table>
    </div>
    ${restaurant.customerReviews.map((review) => `
        <div class="review_restoran">
            <h3>${review.name} - ${review.date}</h3>
            <p class="normal_p">${review.review}</p>
        </div>
    `).join('')}
  </div>
  
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="add to favorite" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="remove from favorite" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
