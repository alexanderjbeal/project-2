module.exports = function (sequelize, Sequelize) {

  var Game = sequelize.define('game', {
    numberOfUsers: {
      type: Sequelize.STRING,
      allowNull: true,

      //type: sequelize.ARRAY(sequelize.INTEGER), defaultValue: null
      // type:
      //   Room.update(
      //     { 'numberUsers': sequelize.fn('array_append', sequelize.col('numberUsers'), id) },
      //     { 'where': { 'id': id } }
      //   )

    }
    // userId: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true
    // },
    // sportSportsId: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   defaultValue: 1
    // }
  });

  Game.associate = function (models) {
    Game.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "userId",
        allowNull: true
      }
    }),
      Game.belongsTo(models.sport, {
        onDelete: "CASCADE",
        foreignKey: {
          name: "sportSportsId",
          allowNull: true
        }
      });

  }
  // INSERT INTO "test" ("id","title","id_list") VALUES (DEFAULT,'testing 2',ARRAY[1,2]::INTEGER[]) RETURNING *;
  //allowNull: true
  Game.sync();
  //{ force: true }
  return Game;
};