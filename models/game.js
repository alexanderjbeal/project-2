module.exports = function (sequelize, Sequelize) {
  var Game = sequelize.define('Game', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      time: {
          type: Sequelize.INTEGER,
          notEmpty: true
      },
      location: {
          type: Sequelize.TEXT,
          notEmpty: true
      },
      max_players: {
        type: Sequelize.INTEGER,
        notEmpty: true
      }
      // full_game: {
      //     type: Sequelize.BOOLEAN,
      //     defaultValue: true
      // }
    //   time_stamp: {
    //       type: 'TIMESTAMP',
    //       defaultValue: Sequelize.CURRENT_TIMESTAMP,
    //       allowNull: false,
    //       defaultValue: true
    //   }
  });

  // Game.associate = function(models) {
  //   // We're saying that a Game should belong to an User
  //   // A Game can't be created without an User due to the foreign key constraint
  //   Game.belongsTo(models.User, {
  //     ondelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   });
  // };

  Game.sync();
  return Game;

};