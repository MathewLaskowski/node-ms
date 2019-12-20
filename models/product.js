const db = require('../util/database');
const Cart = require('./cart');

// const getProductsFromFile = callback => {
//   fs.readFile(pathFile, (err, fileContent) => {
//     if (err) {
//       callback([]);
//     } else {
//       callback(JSON.parse(fileContent));
//     }
//   })
// };

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.description, this.imageUrl]
    );
    // getProductsFromFile((products) => {
    //   if (this.id) {
    //     const existingProductIndex = products.findIndex(prod => prod.id === this.id)
    //     const updatedProducts = [...products];
    //     updatedProducts[existingProductIndex] = this;
    //     fs.writeFile(pathFile, JSON.stringify(updatedProducts), (err) => {
    //       console.log(err);
    //     })
    //   } else {
    //     this.id = Math.random().toString();
    //     products.push(this);
    //     fs.writeFile(pathFile, JSON.stringify(products), (err) => {
    //       console.log(err);
    //     })
    //   }
    // })
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id, callback) {
    // getProductsFromFile(products => {
    //   const product = products.find(p => p.id === id);
    //   callback(product);
    // });
  }

  static deleteById(id) {
    // getProductsFromFile(products => {
    //   const product = products.find(p => p.id === id);
    //   const updatedProducts = products.filter(p => p.id !== id);
    //   fs.writeFile(pathFile, JSON.stringify(updatedProducts), err => {
    //     if (!err) {
    //       Cart.deleteProduct(id, product.price);
    //     }
    //   })
    // });
  }
};
