const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));

// 2-may-20//
// working with templating engine :pug
// app.set("view engine", "pug");
// app.set("views", "views");

// 5-may-2020
// working with handlebars
const expressHbs = require("express-handlebars");
app.engine("handlebars", expressHbs()); // registerting handlebars to express
app.set("view engine", "handlebars"); // telling express view engine to use handlebars ext as view files
app.set("views", "views"); // telling express to find view files from view folder

//adding a public dir
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes.router);
app.use(shopRoutes);
// 404 page0 using core code
// app.use((req, res, next) => {
//   res.status(404).send("<h1>Page Not Found</h1>");
// });

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));

  // with pug
  res.status(404).render("404", { pageTitle: "Page Not Found handlebar" });
});
app.listen(3000);
