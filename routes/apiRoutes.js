var db = require("../models");

module.exports = function(app) {

    // Get all players
  app.get("/api/all", (req, res) => {
    db.user.findAll({}).then( (results) => {
      res.json(results);
    });
  });

};
