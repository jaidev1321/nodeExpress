const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();

const products = [];

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  // console.log(products);
  res.redirect("/");
});

router.get("/add-product", (req, res, next) => {
  //   res.send(
  //     '<h1>Add Product Page!</h1><form action="/admin/add-product" method="post"><input type="text" name="title"><button type="submit">Save</submit></form>'
  //   );

  // serving html page to view

  //   res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});
exports.router = router;
exports.products = products;
