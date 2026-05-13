/*CHECK FARMER LOGIN*/

function protectFarmerPage() {

  const farmerLoggedIn =
  localStorage.getItem("farmerLoggedIn");

  if (!farmerLoggedIn) {

    alert("Please login as Farmer first");

    window.location.href =
    "farmers-register.html";
  }
}

/*CHECK BUYER LOGIN*/

function protectBuyerPage() {

  const buyerLoggedIn =
  localStorage.getItem("buyerLoggedIn");

  if (!buyerLoggedIn) {

    alert("Please login as Buyer first");

    window.location.href =
    "buyer-register.html";
  }
}

/*FARMER LOGOUT*/

function logoutFarmer() {

  localStorage.removeItem("farmerLoggedIn");

  alert("Farmer Logged Out Successfully");

  window.location.href = "index.html";
}

/*BUYER LOGOUT*/

function logoutBuyer() {

  localStorage.removeItem("buyerLoggedIn");

  alert("Buyer Logged Out Successfully");

  window.location.href = "index.html";
}