/*05.  Create an Inventory system in JavaScript to manage products using prototypes. Implement a Product 
constructor function that defines the properties of a product such as name, category, price, and stock. 
:evelop an Inventory constructor function that initializes an empty inventory array. Extend the Inventory 
prototype with a method addProduct that adds a valid Product object to the inventory and logs a 
confirmation message. =dditionally, implement a method deleteProduct that removes a product from the 
inventory by name and logs whether the deletion was successful.*/

function Product(name, category, price, stock) {
  this.name = name;
  this.category = category;
  this.price = price;
  this.stock = stock;
}

function Inventory() {
  this.products = [];
}

Inventory.prototype.addProduct = function (product) {
  if (product instanceof Product) {
    this.products.push(product);
    console.log(`Added ${product.name} to the inventory.`);
  } else {
    console.log("Invalid product. Please provide a valid Product object.");
  }
};

Inventory.prototype.deleteProduct = function (productName) {
  const index = this.products.findIndex(
    (product) => product.name === productName
  );
  if (index !== -1) {
    this.products.splice(index, 1);
    console.log(`Deleted ${productName} from the inventory.`);
  } else {
    console.log(`${productName} not found in the inventory.`);
  }
};

const inventory = new Inventory();

const product1 = new Product("Laptop", "Electronics", 899, 10);
const product2 = new Product("Book", "Books", 20, 50);

inventory.addProduct(product1); // Added Laptop to the inventory.
inventory.addProduct(product2); // Added Book to the inventory.

inventory.deleteProduct("Laptop"); // Deleted Laptop from the inventory.
