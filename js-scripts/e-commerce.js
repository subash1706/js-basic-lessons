let count = 0;
let total;
const cartIcon = document.getElementById("cart-icon");
const card = document.getElementById("card");
const quantity = document.querySelectorAll("#qty");
const badge = document.querySelector(".badge");
const price = document.getElementById("price");
const addToCart = document.getElementById("add-cart");
const cardBody = document.getElementById("card-body");
const cardEmpty = document.querySelector(".card-empty");
const cardFull = document.querySelector(".card-full");
const deleteItem = document.getElementById("delete");

let loopQty = () => {
  for (let i = 0; i < quantity.length; i++) {
    quantity[i].textContent = count;
  }
};
plus.addEventListener("click", (e) => {
  count++;
  loopQty();
});
minus.addEventListener("click", (e) => {
  if (count > 0) {
    count--;
    loopQty();
  }
});
addToCart.addEventListener("click", (e) => {
  let basePrice = 125;
  badge.textContent = count;
  if (count > 0) {
    cardEmpty.style.display = "none";
    cardFull.style.display = "block";
    price.textContent = basePrice * count;
    badge.style.display = "block";
  }
});
deleteItem.addEventListener("click", (e) => {
  cardFull.style.display = "none";
  cardEmpty.style.display = "block";
  count = 0;
  loopQty();
  badge.textContent = count;
  badge.style.display = "none";
});
cartIcon.addEventListener("click", (e) => {
  card.classList.toggle("active");
});
document.addEventListener("mouseup", (e) => {
  if (!card.contains(e.target)) {
    card.classList.remove("active");
  }
});
let openNav = () => {
  document.querySelector("#collapse").classList.add("show");
  console.log("sidebar has been opened");
};
let closeNav = () => {
  document.querySelector("#collapse").classList.remove("show");
  console.log("sidebar has been closed");
};
