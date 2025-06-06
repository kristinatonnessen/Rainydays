
const mensProducts = [
  {
    name: "Rocket Jacket",
    image: "../mens_jackets/Rocket_jacket_05.jpg",
    link: "rocket_jacket.html",
    price: "1990 kr."
  },
  {
    name: "Boarding Jacket",
    image: "../mens_jackets/Boarding_Jacket_02.jpg",
    link: "rocket_jacket.html",
    price: "1990 kr."
  },
  {
    name: "Drop Jacket",
    image: "../mens_jackets/Drop_Jacket_02.jpg",
    link: "rocket_jacket.html",
    price: "1990 kr."
  },
  {
    name: "Pump Jacket",
    image: "../mens_jackets/Pump_Jacket_02.jpg",
    link: "rocket_jacket.html",
    price: "1990 kr."
  },
  {
    name: "Sway Jacket",
    image: "../mens_jackets/Sway_Jacket_02.jpg",
    link: "rocket_jacket.html",
    price: "1990 kr."
  }
];

const womensProducts = [
  {
    name: "Bomb Jacket",
    image: "../womens_jackets/Bomb_Jacket_02.jpg",
    price: "1990 kr."
  },
  {
    name: "Braid Jacket",
    image: "../womens_jackets/Braid_Jacket_02.jpg",
    price: "1990 kr."
  },
  {
    name: "Frost Jacket",
    image: "../womens_jackets/Frost_Jacket_02.jpg",
    price: "1990 kr."
  },
  {
    name: "Haze Jacket",
    image: "../womens_jackets/Haze_Jacket_02.jpg",
    price: "1990 kr."
  },
  {
    name: "Nordic Jacket",
    image: "../womens_jackets/Nordic_Jacket_05.png",
    price: "1990 kr."
  }
];


function renderProducts(products, containerId, isLink = false) {
  const container = document.getElementById(containerId);
  const spinner = document.getElementById("spinner");

  if (spinner) spinner.style.display = "block";

  setTimeout(() => {
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      const image = `<img src="${product.image}" alt="${product.name}">`;
      const name = `<h3 class="product-name">${product.name}</h3>`;
      const brand = `<p class="brand-name">RAINYDAYS</p>`;
      const price = `<p class="price">${product.price}</p>`;

      if (isLink && product.link) {
        card.innerHTML = `<a href="${product.link}">${image}${name}${brand}${price}</a>`;
      } else {
        card.innerHTML = `${image}${name}${brand}${price}`;
      }

      container.appendChild(card);
    });

    if (spinner) spinner.style.display = "none";
  }, 500); 
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("mens-products")) {
    renderProducts(mensProducts, "mens-products", true);
  }

  if (document.getElementById("womens-products")) {
    renderProducts(womensProducts, "womens-products");
  }
});
