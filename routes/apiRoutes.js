var db = require("../models");

module.exports = function(app) {

    // Get all players
  app.get("/api/all", (req, res) => {
    db.user.findAll({}).then( (results) => {
      res.json(results);
    });
  });


  // Add a player
  app.post("/api/new", (req, res) => {

    console.log("Player Data:");
    console.log(req.body);

    User.create({
      firstname: req.body.firstname,
      email: req.body.email
    }).then( (results) => {
      res.end();
    });

  });


};





  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });


  // Get all examples
  // app.get("/players", function(req, res) {
  //   db.Users.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

    // GET route for getting all of the todos
    // app.get("/api/players", function(req, res) {
    //   db.user.findAll({
    //     attributes:
    //     ['firstname', 'email'], users: ['firstname', 'email']
    //   }).then(function(dbUser) {
    //     // We have access to the todos as an argument inside of the callback function
    //     console.log(dbUser);
    //     res.json(dbUser);
    //   });
    // });
