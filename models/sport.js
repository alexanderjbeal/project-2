module.exports = function (sequelize, Sequelize) {

  var Sport = sequelize.define('Sport', {
    numberOfUsers: {
      type: Sequelize.STRING,
      allowNull: true,
      constraints: false
    }

  });

  // Sport.associate = function (models) {
  //   Sport.hasMany(models.User, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   });
  // }

  Sport.sync();
  return Sport;

};