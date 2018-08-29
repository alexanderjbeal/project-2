var db = require("../models");

module.exports = function(app) {

    // Get all players
  app.get("/api/all", (req, res) => {
    db.user.findAll({}).then( (dbPlayers) => {
      res.json(dbPlayers);
    });
  });

    //sequelize callbacks for the games page
    //get to display all games
    app.get("/api/games", function(req, res) {
      db.Sports.findAll({}).then(function(dbGames) {
        res.json(dbGames);
      });
    });

    //post to create new games
    // app.post("/api/games", function(req, res) {
    //   db.Sports.create(req.body).then(function(dbGames) {
    //     res.json(dbGames);
    //   });
    // });
    app.post("/api/games", function(req, res) {
      console.log(req.body);
      db.Sports.create({
        time: req.body.time,
        location:req.body.location,
        max_players: req.body.maxplayers
      }).then( (dbGames) => {
        res.json(dbGames);
      })
    });

    //delete to delete a game by player id
    //validating if ID is the creater ID to delete???????
    app.delete("/api/games/:id", function(req, res) {
      db.Sports.destroy({where: {id: req.params.id } }).then(function(dbGames) {
        res.json(dbGames);
      });
    });
  
    //need to write the update post for
    app.put("/api/games", function(req, res) {
      let game = {};
  
      if (req.body.location) game.location = req.body.location;
      if (req.body.time) game.time = req.body.time;
      if (req.body.maxPlayers) game.max_players = req.body.max_players;
  
      db.Sports.update(game, {
          where: {
              id: req.body.id
          }
      }).then(function (dbUpdateGames) {
          console.log(dbUpdateGames)
          res.json(dbUpdateGames)
      });
    })
  
    //sequelize callbacks for players page
    //get to display all players who have logged in
    // app.get("/api/players", function(req, res) {
    //   db.Players.findAll({}).then(function(dbPlayers) {
    //     res.json(dbPlayers);
    //   });
    // });
  //do we want a post/update/delete?
  

 

};
