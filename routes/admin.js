var express = require('express');
const userHelpers = require('../helpers/user-helpers');
const { log } = require('handlebars');
var router = express.Router();

/* GET users listing. */
router.get('/',  async (req, res) => {
  let products = await userHelpers.getCartProducts()
  console.log(products)
  res.render('admin/index',{products})
});

module.exports = router;
