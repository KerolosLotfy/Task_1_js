let cartBtn = document.querySelector(".cart");
let productsBtn = document.querySelector(".products");
let total = document.querySelector("#total");
let allProducts = document.querySelectorAll(".card-title");
let addBtn = document.querySelectorAll(".add");
let cartIcon = document.querySelector(".cart > span");
let tRows = document.querySelectorAll(".table > tbody > tr");

// Show products in Cart && Hide All Products in page
cartBtn.addEventListener("click", () => {
  document.querySelector("#cart").style.display = "block";
  document.querySelector("#products").style.display = "none";
});

// Hide products in Cart && Show All Products in page
productsBtn.addEventListener("click", () => {
  document.querySelector("#cart").style.display = "none";
  document.querySelector("#products").style.display = "block";
});

//  looping on (add) buttons
addBtn.forEach((btn) => {
  //  add product name && price  to Cart
  btn.addEventListener("click", () => {
    // add number of products in cart
    cartIcon.innerHTML = parseInt(cartIcon.innerHTML) + 1;

    for (let i = 0; i < allProducts.length; i++) {
      // Select All Rows in Table Body
      let tRows = document.querySelectorAll(".table > tbody > tr");
      if (tRows.length != 0) {
        for (let i = 0; i < tRows.length; i++) {
          if (
            tRows[i].children[0].textContent ===
            btn.parentElement.children[0].textContent
          ) {
            tRows[i].children[2].textContent =
              +tRows[i].children[2].textContent + 1;
            break;
          }
          if (i === tRows.length - 1) {
            addProdstoCart(btn);
            break;
          }
        }
        break;
      } else {
        addProdstoCart(btn);
        break;
      }
    }

    // Show Total Price
    let tRows = document.querySelectorAll(".table > tbody > tr");
    total.textContent = 0;
    tRows.forEach((tr) => {
      total.textContent = `${
        +total.textContent +
        +tr.children[1].textContent * +tr.children[2].textContent
      }`;
    });
    total.textContent = total.textContent + " $";
  });
});

// to Create new Table Row
function addProdstoCart(btn) {
  let tr = document.createElement("tr");
  let prodName = document.createElement("td");
  prodName.textContent = btn.parentElement.children[0].textContent;
  let prodPrice = document.createElement("td");
  prodPrice.textContent = `${btn.parentElement.children[0].getAttribute(
    "price"
  )}`;
  let quatity = document.createElement("td");
  quatity.textContent = 1;
  let delBtn = document.createElement("td");
  delBtn.textContent = "Delete";
  delBtn.className = "btn btn-danger btn-sm"
  tr.appendChild(prodName);
  tr.appendChild(prodPrice);
  tr.appendChild(quatity);
  tr.appendChild(delBtn);
  document.querySelector(".table > tbody").appendChild(tr);
}
