const farmerLoggedIn = localStorage.getItem("farmerLoggedIn");

if (!farmerLoggedIn) {
  alert("Please login as farmer first");
  window.location.href = "farmer-login.html";
}

const form = document.getElementById("sellForm");
const imageInput = document.getElementById("image");
const preview = document.getElementById("preview");

// ===== IMAGE PREVIEW =====
imageInput.addEventListener("change", function() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function() {
      preview.src = reader.result;
      preview.style.display = "block";
    };

    reader.readAsDataURL(file);
  }
});

// ===== FORM SUBMIT =====
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const file = imageInput.files[0];

  if (!file) {
    alert("Please upload an image");
    return;
  }

  const reader = new FileReader();

  reader.onload = function() {

    const product = {
      id: Date.now(), // unique ID
      farmer: document.getElementById("farmer").value,
      name: document.getElementById("name").value,
      quantity: document.getElementById("quantity").value,
      location: document.getElementById("location").value,
      category: document.getElementById("category").value,
      phone: document.getElementById("phone").value,
      price: document.getElementById("price").value,
      date: document.getElementById("date").value,
      email: document.getElementById("email").value,
      image: reader.result
    };

    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    alert("✅ Product added successfully!");

    form.reset();
    preview.style.display = "none";
  };

  reader.readAsDataURL(file);
});