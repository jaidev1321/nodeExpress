const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product"
  });
};
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  Product.fetchAll(products => {
    console.log("products", products);
    res.render("shop", {
      prods: products,
      pageTitle: "My Shop",
      path: "/",
      hasProducts: products.length > 0
    });
  });
};
