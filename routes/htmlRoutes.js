var db = require("../models");
var path = require("path");

module.exports = function (app) {

  app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.hbs"));
  });

  app.get("/players", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/players.hbs"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};