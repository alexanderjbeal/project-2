var db = require("../models");
// let moment = require('moment');

module.exports = function(app) {

    // GET route for getting all players/users
    app.get("/api/all", (req, res) => {
      db.User.findAll({
        include: [db.Game],
        order: [ ["lastname", "DESC"] ]
      }).then( (dbPlayers) => {
        res.json(dbPlayers);
      });
    });

    // GET route for getting all gams
    app.get('/api/games', (req, res) => {
      db.Game.findAll({
        include: [db.User], 
        order: [ ["date", "DESC"] ]
      }).then(function(dbGame) {
        res.json(dbGame);
      });
    });
    
    // POST route for creating a new game
    app.post("/api/games", function(req, res) {
      db.Game.create({
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        max_players: req.body.max_players
      }).then(function() {
        res.redirect("/games");
      });
    });

    // POST route for creating userGames
    // NEWEST ROUTE
    app.post("/api/games", function(req, res) {
        db.UserGame.create({
            GameId: req.params.GameId,
            UserId: req.params.UserId
        }).then(function(){
            res.redirect("/games");
        });
    });


    // Checking to see if there are players in a game.
    // Updating the game table to full if there are enough players
    // Adding a player to a userGame if not full.

    app.get("/api/games", (req, res) => {
      db.UserGame.findAll({
          include: [db.Game, db.User],
          where: {
              GameId: req.params.GameId,
              UserId: req.params.UserId,
  
          }
      }).then(function(currentPlayers) {
          res.json(currentPlayers);
  
          if (currentPlayers.length >= maxPlayers) {
              //could change this alert to whatever
              alert("Game is Full. Please join another.");
  
              //query to 
                  db.Game.update({
                      max_players: {
                          notEmpty: false
                      }
                  }).then(function (updateMaxPlayers) {
                      res.json(updateMaxPlayers);
                  });
              } else {
  
                  app.put("/api/games", function(req, res) {
                      db.UserGame.update({
                          where:{
                              gameId: req.params.GameId,
                              UserId: req.params.UserId
                          }
                      }).then(function(dbUpdateUserGames) {
                          console.log(dbUpdateUserGames);
                          res.json(dbUpdateUserGames);
                      });
                  })
              };
          }
      )
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
