var db = require("../models");

module.exports = function(app) {


    // GET route for gettingg all players/users
    app.get("/api/all", (req, res) => {
      db.User.findAll({}).then( (dbPlayers) => {
        res.json(dbPlayers);
      });
    });
    
    // POST route for saving a new post
    app.post("/api/games", function(req, res) {
      db.Game.create({
        time: req.body.time,
        location: req.body.location,
        max_player: req.body.max_player
      }).then(function() {
        res.redirect("/games");
      });
    });
  
  // GET route for getting all gams
    app.get('/api/games', (req, res) => {
      db.Game.findAll({}).then(function(dbGame) {
        res.json(dbGame);
      });
    });


    //delete to delete a game by player id
    //validating if ID is the creater ID to delete???????
    // app.delete("/api/games/:id", function(req, res) {
    //   db.Sports.destroy({where: {id: req.params.id } }).then(function(dbGames) {
    //     res.json(dbGames);
    //   });
    // });
    
    //need to write the update post for
    // app.put("/api/games", function(req, res) {
    //   let game = {};
  
    //   if (req.body.location) game.location = req.body.location;
    //   if (req.body.time) game.time = req.body.time;
    //   if (req.body.maxPlayers) game.max_players = req.body.max_players;
  
    //   db.Sports.update(game, {
    //       where: {
    //           id: req.body.id
    //       }
    //   }).then(function (dbUpdateGames) {
    //       console.log(dbUpdateGames)
    //       res.json(dbUpdateGames)
    //   });
    // })
  
    //sequelize callbacks for players page
    //get to display all players who have logged in
    // app.get("/api/players", function(req, res) {
    //   db.Players.findAll({}).then(function(dbPlayers) {
    //     res.json(dbPlayers);
    //   });
    // });
  //do we want a post/update/delete?
 

};
