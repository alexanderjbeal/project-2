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
          notEmpty: true,
          validate: {
            len: [1, 15]
        }
      },
      max_players: {
        type: Sequelize.INTEGER,
        notEmpty: true,
        validate: {
          min: { args: 6, msg: "Pick between 6-10" },
          max: { args: 10, msg: "Pick between 6-10" },
        }
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