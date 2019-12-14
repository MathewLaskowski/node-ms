const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.products
  console.log(products.length)
  res.render('shop', { products, docTitle: 'Shop' });
});

module.exports = router;
