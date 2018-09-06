module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define('Game', {
      date: {
          type: Sequelize.DATE,
          notEmpty: true
      },
      time: {
          type: Sequelize.TIME,
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
      // time_stamp: {
      //     type: 'TIMESTAMP',
      //     defaultValue: Sequelize.CURRENT_TIMESTAMP,
      //     allowNull: false,
      //     defaultValue: true
      // }
  });

  Game.associate = (models) => {
    // We're saying that a Game should belong to an User
    // A Game can't be created without a User due to the foreign key constraint
    models.Game.belongsToMany(models.User, {
      through: models.UserGame
    })
  };
  Game.sync();
  return Game;
};