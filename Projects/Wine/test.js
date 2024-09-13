class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class Cart {
  constructor() {
    this.cartItems = [];
    this.total = 0;
  }

  // Add a product to the cart
  addProduct(product) {
    this.cartItems.push(product);
    this.updateTotal();
    this.renderCart();
  }

  // Calculate the total price
  updateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  // Render the cart items
  renderCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    cartItemsElement.innerHTML = "";

    this.cartItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      cartItemsElement.appendChild(li);
    });

    totalElement.textContent = this.total.toFixed(2);
  }

  // Checkout method
  checkout() {
    if (this.cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let confirmationMessage = "You have purchased:\n";
    this.cartItems.forEach((item) => {
      confirmationMessage += `${item.name} - $${item.price}\n`;
    });
    confirmationMessage += `Total: $${this.total.toFixed(2)}`;

    alert(confirmationMessage);

    // Clear cart after checkout
    this.cartItems = [];
    this.updateTotal();
    this.renderCart();
  }
}

class Store {
  constructor() {
    this.products = [
      new Product(1, "Product 1", 10),
      new Product(2, "Product 2", 15),
      new Product(3, "Product 3", 20),
    ];
    this.cart = new Cart();
    this.renderProducts();
    this.attachCheckoutListener();
  }

  // Render products on the page
  renderProducts() {
    const productsElement = document.getElementById("products");
    this.products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.setAttribute("data-id", product.id);
      productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            `;
      productsElement.appendChild(productDiv);
    });

    this.attachAddToCartListeners();
  }

  // Attach event listeners to "Add to Cart" buttons
  attachAddToCartListeners() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productId = parseInt(event.target.getAttribute("data-id"));
        const product = this.products.find((p) => p.id === productId);
        this.cart.addProduct(product);
      });
    });
  }

  // Attach checkout listener
  attachCheckoutListener() {
    const checkoutButton = document.getElementById("checkout-btn");
    checkoutButton.addEventListener("click", () => {
      this.cart.checkout();
    });
  }
}

// Initialize the store when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new Store();
});
