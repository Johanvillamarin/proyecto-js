
  document.body.insertAdjacentHTML('afterbegin', `
    <header class="header">
      <nav class="nav">
        <button id="menu-button" class="nav-button">Menú</button>
        <button class="nav-button">Contacto</button>
        <button class="nav-button">Productos</button>
        <button class="nav-button">Registrarse</button>
      </nav>
    </header>
  
    <section id="filters-section" class="hidden">
      <div class="filters">
        <label for="price-range">Rango de Precio:</label>
        <input type="range" id="price-range" min="100" max="3000">
        <label for="brand">Marca:</label>
        <select id="brand">
          <option value="all">Todas</option>
          <option value="HP">HP</option>
          <option value="Lenovo">Lenovo</option>
          <option value="ASUS">ASUS</option>
          <option value="Apple">Apple</option>
        </select>
      </div>
    </section>
  
    <section id="products-section">
      <h2 class="section-title">Nuestros Productos</h2>
      <div id="product-container" class="products"></div>
    </section>
  `);

  // Productos
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

  function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.classList.add('product-image');

    const productName = document.createElement('h3');
    productName.classList.add('product-name');
    productName.innerText = product.name;

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.innerText = `€${product.price}`;

    const productStars = document.createElement('p');
    productStars.classList.add('product-stars');
    productStars.innerText = `⭐ ${product.stars} (${product.reviews} reseñas)`;

    const productSeller = document.createElement('p');
    productSeller.classList.add('product-seller');
    productSeller.innerText = `Vendedor: ${product.seller}`;

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(productStars);
    productCard.appendChild(productSeller);

    return productCard;
  }

  products.forEach(product => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });

  function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer-content');

    const logoDiv = document.createElement('div');
    const logo = document.createElement('img');
    logo.src = 'https://cdn6.aptoide.com/imgs/3/d/5/3d5c1e5599360daa50bb534befd899f9_fgraphic.jpg';
    logo.alt = 'Logo';
    logo.classList.add('logo');
    logoDiv.appendChild(logo);

    const privacyPolicyDiv = document.createElement('div');
    privacyPolicyDiv.classList.add('privacy-policy');
    const privacyCheckbox = document.createElement('input');
    privacyCheckbox.type = 'checkbox';
    privacyCheckbox.id = 'privacyCheckbox';
    const privacyLabel = document.createElement('label');
    privacyLabel.setAttribute('for', 'privacyCheckbox');
    privacyLabel.innerHTML = 'Acepto la <a href="#" style="color: #ff0;">Política de Privacidad</a>';
    privacyPolicyDiv.appendChild(privacyCheckbox);
    privacyPolicyDiv.appendChild(privacyLabel);

    const socialLinksDiv = document.createElement('div');
    socialLinksDiv.classList.add('social-links');
    // Crear enlace de Twitter
const twitterLink = document.createElement('a');
twitterLink.href = 'https://x.com/pccomponentes';
twitterLink.target = '_blank'; 
twitterLink.innerText = 'X';
const twitterImg = document.createElement('img'); 
twitterImg.src = 'https://www.lowi.es/blog/wp-content/uploads/2023/10/twitter-X-1000x625.jpeg';
twitterImg.alt = 'Twitter Logo'; 
twitterImg.style.width = '24px'; 
twitterImg.style.height = '24px'; 
twitterLink.appendChild(twitterImg); 

// Crear enlace de Facebook
const facebookLink = document.createElement('a');
facebookLink.href = 'https://www.facebook.com/pccomponentes/photos';
facebookLink.target = '_blank'; 
facebookLink.innerText = 'Facebook';
const facebookImg = document.createElement('img'); 
facebookImg.src = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg';
facebookImg.alt = 'Facebook Logo'; 
facebookImg.style.width = '24px'; 
facebookImg.style.height = '24px';
facebookLink.appendChild(facebookImg); 

// Crear enlace de Instagram
const instagramLink = document.createElement('a');
instagramLink.href = 'https://www.instagram.com/pccomponentes/?hl=en';
instagramLink.target = '_blank'; 
instagramLink.innerText = 'Instagram';
const instagramImg = document.createElement('img'); 
instagramImg.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png';
instagramImg.alt = 'Instagram Logo'; 
instagramImg.style.width = '24px'; 
instagramImg.style.height = '24px'; 
instagramLink.appendChild(instagramImg); 


socialLinksDiv.appendChild(twitterLink);
socialLinksDiv.appendChild(facebookLink);
socialLinksDiv.appendChild(instagramLink);


    const contactInfoDiv = document.createElement('div');
    contactInfoDiv.classList.add('contact-info');
    const contactNumber = document.createElement('p');
    const contactLink = document.createElement('a');
    contactLink.href = 'tel:+34600881455';
    contactLink.style.color = 'green';
    contactLink.innerText = '+34600881455';
    contactNumber.innerHTML = 'Contacto: ';
    contactNumber.appendChild(contactLink);
    contactInfoDiv.appendChild(contactNumber);

    footer.appendChild(logoDiv);
    footer.appendChild(privacyPolicyDiv);
    footer.appendChild(socialLinksDiv);
    footer.appendChild(contactInfoDiv);

    return footer;
  }


  document.body.appendChild(createFooter());
  
  const privacyCheckbox = document.getElementById('privacyCheckbox');
  privacyCheckbox.addEventListener('change', () => {
    console.log(privacyCheckbox.checked ? "El usuario ha aceptado la política de privacidad" : "El usuario no ha aceptado la política de privacidad");
  });

