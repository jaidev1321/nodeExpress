const path = require("path");
const express = require("express");
const router = express.Router();
const adminData = require("./admin");
router.get("/", (req, res, next) => {
  console.log(adminData.products);
  //   res.send("<h1>Home Page!</h1>");
  // send html file view //
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));

  // using pug te,plate engine
  res.render("shop", {
    prods: adminData.products,
    pageTitle: "My Shop",
    path: "/"
  });
});

module.exports = router;
