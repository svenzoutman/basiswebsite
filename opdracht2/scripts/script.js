// JavaScript Document
console.log("hallo");

// ----------
// Menu
// ----------
let buttonMenu = document.querySelector('header nav ul li:first-of-type')
let closeButtonMenu = document.querySelector('.standard-menu li:last-of-type')

function openMenu() {
	document.body.classList.toggle('toonMenu')
}

buttonMenu.addEventListener('click', openMenu)
closeButtonMenu.addEventListener('click', openMenu)


// ----------
// Filtermenu
// ----------
let buttonFilter = document.querySelector('main button:first-of-type')
let closeButtonFilter = document.querySelector('main form button:last-of-type')

function openFilter() {
	document.body.classList.toggle('toonFilter')
}

buttonFilter.addEventListener('click', openFilter)
closeButtonFilter.addEventListener('click', openFilter)

document.querySelector("#saveFilter").addEventListener("click", function(event) {
  event.preventDefault();
}, false);



// ----------
// Search & Sort
// ----------
var options = {
  valueNames: [ 'list', 'brand', 'price' ]
};

var userList = new List('products', options);





// -----------------
// Filter Checkboxes
// -----------------

// Hide element 
function hide(classToHide) {	
  [].forEach.call(document.getElementsByClassName(classToHide), function (el) {
  	el.hidden = true;
	});  
}

// Show element
function show(classToShow) {	
  [].forEach.call(document.getElementsByClassName(classToShow), function (el) {
  	el.hidden = false;
	});  
}


// Event for the stoneisland checkbox
document.getElementById('stoneisland').onchange = function() {
	if (this.checked) show('stoneisland'); else hide('stoneisland');
}

// Event for the cpcompany checkbox
document.getElementById('cpcompany').onchange = function() {
	if (this.checked) show('cpcompany'); else hide('cpcompany');
}

// Event for the acoldwall checkbox
document.getElementById('acoldwall').onchange = function() {
	if (this.checked) show('acoldwall'); else hide('acoldwall');
}

// Event for the heron preston checkbox
document.getElementById('heronpreston').onchange = function() {
	if (this.checked) show('heronpreston'); else hide('heronpreston');
}

// Event for the ambush checkbox
document.getElementById('ambush').onchange = function() {
	if (this.checked) show('ambush'); else hide('ambush');
}



// Event for the black checkbox
document.getElementById('black').onchange = function() {
	if (this.checked) show('black'); else hide('black');
}

// Event for the white checkbox
document.getElementById('white').onchange = function() {
	if (this.checked) show('white'); else hide('white');
}

// Event for the grey checkbox
document.getElementById('grey').onchange = function() {
	if (this.checked) show('grey'); else hide('grey');
}

// Event for the orange checkbox
document.getElementById('orange').onchange = function() {
	if (this.checked) show('orange'); else hide('orange');
}

// Event for the pink checkbox
document.getElementById('pink').onchange = function() {
	if (this.checked) show('pink'); else hide('pink');
}

// Event for the lavender checkbox
document.getElementById('lavender').onchange = function() {
	if (this.checked) show('lavender'); else hide('lavender');
}

// Event for the brown checkbox
document.getElementById('brown').onchange = function() {
	if (this.checked) show('brown'); else hide('brown');
}



// Event for the 0-50 checkbox
document.getElementById('nulVijftig').onchange = function() {
	if (this.checked) show('nulVijftig'); else hide('nulVijftig');
}

// Event for the 50-100 checkbox
document.getElementById('vijftigHonderd').onchange = function() {
	if (this.checked) show('vijftigHonderd'); else hide('vijftigHonderd');
}

// Event for the 100-150 checkbox
document.getElementById('honderdHonderdvijftig').onchange = function() {
	if (this.checked) show('honderdHonderdvijftig'); else hide('honderdHonderdvijftigk');
}

// Event for the 150+ checkbox
document.getElementById('honderdvijftigPlus').onchange = function() {
	if (this.checked) show('honderdvijftigPlus'); else hide('honderdvijftigPlus');
}





// ----------
// Wishlist
// ----------
let wishlistIcon = document.querySelector("#wishlist-icon");
let wishlist = document.querySelector(".wishlist");
let closeWishlist = document.querySelector("#close-wishlist");

// Open wishlist
wishlistIcon.onclick = () => {
  wishlist.classList.add("active");
};

// Close wishlist
closeWishlist.onclick = () => {
  wishlist.classList.remove("active");
};

// wishlist Working JS
if (document.wishlistReadyState == "loading") {
  document.addEventListener("DOMContentLoaded", wishlistReady);
} else {
  wishlistReady();
}

// Making Function
function wishlistReady() {
  // Reomve Items From wishlist
  var reomvewishlistButtons = document.getElementsByClassName("wishlist-remove");
  console.log(reomvewishlistButtons);
  for (var i = 0; i < reomvewishlistButtons.length; i++) {
    var button = reomvewishlistButtons[i];
    button.addEventListener("click", removewishlistItem);
  }

  // Add To wishlist
  var addwishlist = document.getElementsByClassName("add-wishlist");
  for (var i = 0; i < addwishlist.length; i++) {
    var button = addwishlist[i];
    button.addEventListener("click", addwishlistClicked);
  }
}

// Reomve Items From wishlist
function removewishlistItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
}

function addwishlistClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var color = shopProducts.getElementsByClassName("color")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductTowishlist(title, price, color, productImg);
  // updatetotal();
}

function addProductTowishlist(title, price, color, productImg) {
  var wishlistShopBox = document.createElement("div");
  wishlistShopBox.classList.add("wishlist-box");
  var wishlistItems = document.getElementsByClassName("wishlist-content")[0];
  var wishlistItemsNames = wishlistItems.getElementsByClassName("wishlist-name");
  for (var i = 0; i < wishlistItemsNames.length; i++) {
    if (wishlistItemsNames[i].innerText == title) {
      alert("You already have this item in your wishlist");
      return;
    }
  }

  var wishlistBoxContent = `
                        <img src="${productImg}" alt="" class="wishlist-img">
                        <div class="detail-box">
                            <div class="wishlist-name">${title}</div>
                            <div class="wishlist-name">${color}</div>
                            <div class="wishlist-price">${price}</div>
                        </div>
                        
                        <!-- Remove wishlist -->
                        <button class='wishlist-remove'>delete</button>`;
                        
  wishlistShopBox.innerHTML = wishlistBoxContent;
  wishlistItems.append(wishlistShopBox);
  wishlistShopBox
    .getElementsByClassName("wishlist-remove")[0]
    .addEventListener("click", removewishlistItem);
}



// De code hieronder heb ik gekocht online. Het was ook meer een donatie dan komen.
// Ik kan alleen niet meer vinden waar ik dat nou had gekocht.

// ------------
// Shoppingcart
// ------------
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open Cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};

// Close Cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// Cart Working JS
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Making Function
function ready() {
  // Reomve Items From Cart
  var reomveCartButtons = document.getElementsByClassName("cart-remove");
  console.log(reomveCartButtons);
  for (var i = 0; i < reomveCartButtons.length; i++) {
    var button = reomveCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  // Quantity Changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Add To Cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  // Buy Button Work
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}

// Buy Button
function buyButtonClicked() {
  alert("Your Order is placed");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}

// Reomve Items From Cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

// Quantity Changes
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

// Add To cart
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}

function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-name");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already have this item in your cart");
      return;
    }
  }
  var cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-name">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!-- Remove Cart -->
                        <button class='cart-remove'>delete</button>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

// Update Total
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("€", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  // If price Contain some Cents Value
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName("total-price")[0].innerText = "€" + total;
}