var db = require("../models");

module.exports = function(app) {


    // Get all players
    app.get("/api/all", (req, res) => {
      db.User.findAll({}).then( (dbPlayers) => {
        res.json(dbPlayers);
      });
    });
  
      // POST route for saving a new post
      app.post("/api/games", function(req, res) {
        console.log(req.body.time);
        db.Game.create({
            time: req.body.time,
            location: req.body.location,
            max_player: req.body.max_player
        }).then(function() {
            res.redirect("/games");
        });
    });
  
  
    app.get('/api/games', (req, res) => {
      db.Game.findAll({}).then(function(dbGame) {
          // res.render("games", { Game: dbGame });
          res.json(dbGame);
      });
  });







//   app.get('/api/games', (request, response) => {
//     db.Game.findAll({}).then(function(dbGame) {
//         response.render("game", { Game: dbGame });
//         res.json(dbGame);
//     });
// });

  // app.post('/games/insert', (req, res) => {
  //   db.game.create({
  //     time: req.body.time,
  //     location: req.body.location,
  //     max_players: req.body.max_players
  //   }).then( () => {
  //     res.redirect("/games");
  //   });
  // });

    //sequelize callbacks for the games page
    //get to display all games
    // app.get("/api/all", function(req, res) {
    //   db.sport.findAll({}).then(function(dbGames) {
    //     res.json(dbGames);
    //   });
    // });

  
    // app.post("/games", function(req, res) {
    //   console.log(req.body.time);
    //   db.sport.create({
    //     time: req.body.time,
    //     location:req.body.location,
    //     max_players: req.body.maxplayers
    //   }).then( (dbGames) => {
    //     res.json(dbGames);
    //     res.redirect('/games');
    //   })
    // });

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
  


    //post to create new games
    // app.post("/api/games", function(req, res) {
    //   db.Sports.create(req.body).then(function(dbGames) {
    //     res.json(dbGames);
    //   });
    // });

 

};
