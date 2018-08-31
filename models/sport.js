module.exports = function (sequelize, Sequelize) {

  var Sport = sequelize.define('Sport', {
    numberOfUsers: {
      type: Sequelize.STRING,
      allowNull: true,
      constraints: false
    }

  });

  // Sport.associate = function (models) {
  //   Sport.belongsTo(models.User, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       name: "UserId",
  //       allowNull: true
  //     }
  //   }),
  //     Sport.belongsTo(models.Sport, {
  //       onDelete: "CASCADE",
  //       foreignKey: {
  //         name: "gameGameId",
  //         allowNull: true
  //       }
  //     });

  // }

  Sport.sync();
  return Sport;

};