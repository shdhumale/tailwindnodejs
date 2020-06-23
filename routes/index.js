var express = require('express');
var router = express.Router();
var propertiesReader = require('properties-reader');
var headerproperties = propertiesReader(__dirname + '/../public/properties/header.properties');
var ecommerceproperties = propertiesReader(__dirname + '/../public/properties/ecommerce.properties');

/* GET home page. */
router.get('/', function (req, res, next) {

  var headerImageText = headerproperties.get('headerImageText');
  var headerHome = headerproperties.get('headerHome');
  var headerContact = headerproperties.get('headerContact');
  var headerAbout = headerproperties.get('headerAbout');



  var brandname = ecommerceproperties.get('brandname');
  var productname = ecommerceproperties.get('productname');
  var description = ecommerceproperties.get('description');
  var cost = ecommerceproperties.get('cost');

  res.render('index', {
    title: 'Express', headerImageText: headerImageText, headerHome: headerHome, headerContact: headerContact, headerAbout: headerAbout,
    brandname: brandname, productname: productname, description: description, cost: cost
  });
});

module.exports = router;
