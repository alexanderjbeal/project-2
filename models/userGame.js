module.exports = function (sequelize, Sequelize) {
  UserGame = sequelize.define('UserGame', {
    "GameId": Sequelize.INTEGER,
    "UserId": Sequelize.INTEGER
  });

  UserGame.associate = function(models){
    models.UserGame.belongsTo(models.User);
    models.UserGame.belongsTo(models.Game);
  }

  UserGame.sync({force:true});
  return UserGame;
};