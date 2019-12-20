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
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id =  ?', [id]);
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
