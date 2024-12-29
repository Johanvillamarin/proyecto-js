const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://m.media-amazon.com/images/I/515TGcMxbCL._AC_SX679_.jpg'
  },
  {
    name: 'Lenovo IdeaPad 3',
    price: 659,
    stars: 4.5,
    reviews: 95,
    seller: 'PcComponentes',
    image: 'https://i.pinimg.com/736x/f3/93/df/f393df5693d780ee8ad398d115e9b1fc.jpg'
  },
  {
    name: 'LG Gram 17Z90Q',
    price: 1799,
    stars: 4.8,
    reviews: 18,
    seller: 'PcComponentes',
    image: 'https://i.pinimg.com/736x/21/ed/22/21ed2286900ff4c2b0d987b91e4abc2b.jpg'
  },
  {
    name: 'ASUS VivoBook Pro',
    price: 949,
    stars: 4.7,
    reviews: 80,
    seller: 'PcComponentes',
    image: 'https://m.media-amazon.com/images/I/51m9rcrVtrL._AC_SX679_.jpg'
  },
  {
    name: 'Lenovo V15 IGL',
    price: 349,
    stars: 4,
    reviews: 247,
    seller: 'PcComponentes',
    image: 'https://i.pinimg.com/736x/4d/cc/de/4dccde8aa6c6f4262fe9609951f8cdbc.jpg'
  },
  {
    name: 'LG Ultra PC',
    price: 1999,
    stars: 4.9,
    reviews: 3,
    seller: 'PcComponentes',
    image: 'https://i.pinimg.com/736x/ba/53/a0/ba53a07ddc5ade107f96129e03ede513.jpg'
  },
  {
    name: 'Acer Aspire 5',
    price: 599,
    stars: 4.2,
    reviews: 152,
    seller: 'PcComponentes',
    image: 'https://i.pinimg.com/736x/ee/6d/54/ee6d540738dd2b76158c98c0261b4973.jpg'
  },
  {
    name: 'Dell XPS 13',
    price: 1299,
    stars: 4.6,
    reviews: 45,
    seller: 'PcComponentes',
    image: 'https://i.pinimg.com/736x/92/df/31/92df3151a87bee0c9f858a7b97a71839.jpg'
  },
  {
    name: 'MacBook Air M1',
    price: 999,
    stars: 4.8,
    reviews: 520,
    seller: 'Apple',
    image: 'https://m.media-amazon.com/images/I/51u35dMnGpL.__AC_SX300_SY300_QL70_ML2_.jpg'
  },
  {
    name: 'Huawei MateBook D15',
    price: 749,
    stars: 4.5,
    reviews: 200,
    seller: 'PcComponentes',
    image: 'https://i.pinimg.com/736x/3e/b8/85/3eb885dca28c889bad5b6b2015da8c42.jpg'
  },
  {
    name: 'Microsoft Surface Laptop 4',
    price: 1199,
    stars: 4.7,
    reviews: 90,
    seller: 'PcComponentes',
    image: 'https://i.pinimg.com/736x/68/43/44/6843441d52cec4b8ea734fa5b40f6514.jpg'
  },
  {
    name: 'Razer Blade 15',
    price: 2599,
    stars: 5,
    reviews: 40,
    seller: 'PcComponentes',
    image: 'https://i.pinimg.com/736x/5c/de/37/5cde37bdccdf2af4a3ade182f4834363.jpg'
  },
  {
    name: 'HP Pavilion x360',
    price: 849,
    stars: 4.3,
    reviews: 75,
    seller: 'PcComponentes',
    image: 'https://i.pinimg.com/736x/05/61/1c/05611c2b603f67419838e932710d87cf.jpg'
  }
];


const productContainer = document.getElementById('product-container');

products.forEach(product => {
  const productCard = `
    <div class="product-card">
      <img class="product-image" src="${product.image}" alt="${product.name}">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">€${product.price}</p>
      <p class="product-stars">⭐ ${product.stars} (${product.reviews} reseñas)</p>
      <p class="product-seller">Vendedor: ${product.seller}</p>
    </div>
  `;
  productContainer.innerHTML += productCard;
});