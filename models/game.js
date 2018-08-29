module.exports = function(sequelize, Sequelize) {

  var Game = sequelize.define("game", {

    text: Sequelize.STRING,

    description: Sequelize.TEXT

  });

  return Game;

};