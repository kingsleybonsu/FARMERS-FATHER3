// GET ALL PRODUCTS FROM LOCAL STORAGE

const products =
JSON.parse(localStorage.getItem("products")) || [];

// GET PRODUCT COUNT ELEMENT

const productCount =
document.getElementById("productCount");

// UPDATE PRODUCT TOTAL

productCount.textContent = products.length;



// OPTIONAL WELCOME MESSAGE

const farmerName =
localStorage.getItem("farmerName");

const welcomeText =
document.getElementById("welcomeText");

if (farmerName) {

  welcomeText.innerHTML = `
    Welcome, ${farmerName} 👨🏾‍🌾
  `;

}