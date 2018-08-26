var db = require("../models");
var path = require("path");

module.exports = function(app) {
  
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.hbs"));
  });

  app.get("/players", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/players.hbs"));
  });

  // app.get("/players", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/players.html"));
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });




};






//   app.get('/', function(req, res) {
//     res.send('Welcome to Passport with Sequelize');
// });

  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

    // index route loads index.html
    // app.get("/", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/index.html"));
    // });

  // Load example page and pass in an example by id
  // app.get("/players/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("players", {
  //       example: dbExample
  //     });
  //   });
  // });