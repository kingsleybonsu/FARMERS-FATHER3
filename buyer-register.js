const container = document.getElementById("container");
const switchBtn = document.getElementById("switchBtn");
const overlayText = document.getElementById("overlayText");

let isRegister = false;

/* SWITCH LOGIN ↔ REGISTER */

switchBtn.addEventListener("click", () => {
  container.classList.toggle("active");

  isRegister = !isRegister;

  // REGISTER MODE
  if (isRegister) {
    switchBtn.innerText = "Login";

    overlayText.innerText =
      "Already have an account? Login and continue browsing produce.";
  }

  // LOGIN MODE
  else {
    switchBtn.innerText = "Register";

    overlayText.innerText =
      "New buyer? Register and start connecting directly with farmers.";
  }
});

/*
   BUYER REGISTER
*/

document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const buyer = {
      name: document.getElementById("regName").value,

      phone: document.getElementById("regPhone").value,

      email: document.getElementById("regEmail").value,

      password: document.getElementById("regPassword").value,
    };

    // SAVE BUYER
    localStorage.setItem("buyer", JSON.stringify(buyer));

    alert("Buyer Registration Successful ✅");

    // RETURN TO LOGIN
    container.classList.remove("active");

    isRegister = false;

    switchBtn.innerText = "Register";

    overlayText.innerText =
      "New buyer? Register and start connecting directly with farmers.";
  });

/* 
   BUYER LOGIN
 */

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const phone = document.getElementById("loginPhone").value;
  const password = document.getElementById("loginPassword").value;

  // GET SAVED BUYER
  const savedBuyer = JSON.parse(localStorage.getItem("buyer"));

  // CHECK LOGIN
  if (
    savedBuyer &&
    savedBuyer.phone === phone &&
    savedBuyer.password === password
  ) {
    // SAVE LOGIN STATUS
    localStorage.setItem("buyerLoggedIn", true);

    alert("Buyer Login Successful ✅");

    // REDIRECT
    window.location.href = "index.html";
  } else {
    alert("Invalid Phone Number or Password ❌");
  }
});
