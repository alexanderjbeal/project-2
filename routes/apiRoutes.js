var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

module.exports = function(app) {
  //sequelize callbacks for the games page
  //get to display all games
  app.get("/api/games", function(req, res) {
    db.Games.findAll({}).then(function(dbGames) {
      res.json(dbGames);
    });
  });
  //post to create new games
  app.post("/api/games", function(req, res) {
    db.Games.create(req.body).then(function(dbGames) {
      res.json(dbGames);
    });
  });
  //delete to delete a game by player id
  //validating if ID is the creater ID to delete???????
  app.delete("/api/games/:id", function(req, res) {
    db.Games.destroy({where: {id: req.params.id } }).then(function(dbGames) {
      res.json(dbGames);
    });
  });

  //need to write the update post for
  app.put("/api/games", function(req, res) {
    //object to grab and validate which fields to update
    var validateArr = [];
    // variable to strore JSON object from onclick function
    var updateStorage = {
      location: "Dirt Park",
      time: "12:30",
      maxPlayers: 10
    };
    //pushing updateStorage to validateArr
    validateArr.push(updateStorage);
    console.log(validateArr);
    //Looping through
    for (i = 0; i < validateArr.length; i++) {
      //if all three fields are not null
      if (req.body.location != null && req.body.time != null && req.body.maxPlayers != null ) {
        db.Games.update({
          location: req.body.location,
          time: req.body.time,
          maxPlayers: req.body.maxPlayers

        }, {
            where: {
              id: req.body.id
            }
          }).then(function (dbUpdateGames) {
            console.log(dbUpdateGames)
            res.json(dbUpdateGames)
          });
      } else if (req.body.location != null && req.body.time != null && req.body.maxPlayers == null) {
        //if location and time are not null & maxPlayers is null
        db.Games.update({
          location: req.body.location,
          time: req.body.time
        }, {
            where: {
              id: req.body.id
            }
          }).then(function (dbUpdateGames) {
            console.log(dbUpdateGames)
            res.json(dbUpdateGames)
          });
        
      } else if (req.body.location != null && req.body.time == null && req.body.maxPlayers != null) {
        //if location and maxPlayers are not null & time is null
        db.Games.update({
          location: req.body.location,
          maxPlayers: req.body.maxPlayers

        }, {
            where: {
              id: req.body.id
            }
          }).then(function (dbUpdateGames) {
            console.log(dbUpdateGames)
            res.json(dbUpdateGames)
          });
      } else if (req.body.location != null && req.body.time == null && req.body.maxPlayers == null) {
        // if location is not null & time and maxPlayers are null
        db.Games.update({
          location: req.body.location
        }, {
            where: {
              id: req.body.id
            }
          }).then(function (dbUpdateGames) {
            console.log(dbUpdateGames)
            res.json(dbUpdateGames)
          });
      } else if (req.body.location == null && req.body.time != null && req.body.maxPlayers != null) {
        // if time and maxPlayers are not null & location is null
        db.Games.update({
          time: req.body.time,
          maxPlayers: req.body.maxPlayers

        }, {
            where: {
              id: req.body.id
            }
          }).then(function (dbUpdateGames) {
            console.log(dbUpdateGames)
            res.json(dbUpdateGames)
          });
      } else if (req.body.location == null && req.body.time != null && req.body.maxPlayers == null) {
        // if time is not null and location & maxPlayers are null
        db.Games.update({
          time: req.body.time
        }, {
            where: {
              id: req.body.id
            }
          }).then(function (dbUpdateGames) {
            console.log(dbUpdateGames)
            res.json(dbUpdateGames)
          });
      } else if (req.body.location == null && req.body.time == null && req.body.maxPlayers != null) {
        // if maxPlayers is not null and location & time are null
        db.Games.update({
          maxPlayers: req.body.maxPlayers

        }, {
            where: {
              id: req.body.id
            }
          }).then(function (dbUpdateGames) {
            console.log(dbUpdateGames)
            res.json(dbUpdateGames)
          });
      } else {
        console.log("No updates by user")
      };//closing the conditional to update.
    }//for loop closing curly bracket.


  })

  //sequelize callbacks for players page
  //get to display all players who have logged in
  app.get("/api/players", function(req, res) {
    db.Players.findAll({}).then(function(dbPlayers) {
      res.json(dbPlayers);
    });
  });
//do we want a post/update/delete?
}


