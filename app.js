const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));
//adding a public dir
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes.router);
app.use(shopRoutes);
// 404 page0 using core code
// app.use((req, res, next) => {
//   res.status(404).send("<h1>Page Not Found</h1>");
// });

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000);
