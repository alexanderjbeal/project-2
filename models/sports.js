module.exports = function (sequelize, Sequelize) {
  var Sports = sequelize.define('sport', {
      id: {
          type: Sequelize.STRING,
          primaryKey: true
      },
      time: {
          type: Sequelize.DATE,
          allowNull: true
      },
      location: {
          type: Sequelize.DATE,
          allowNull: true
      },
      max_players: {
        type: Sequelize.INTEGER
      },
      full_game: {
          type: Sequelize.BOOLEAN,
          defaultValue: true
      },
      time_stamp: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.CURRENT_TIMESTAMP,
          allowNull: false
      }
  });

  Sports.associate = function(models) {
    // We're saying that a Game should belong to an User
    // A Game can't be created without an User due to the foreign key constraint
    Sports.belongsTo(models.user, {
      ondelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  Sports.sync();
  return Sports;

};