module.exports = function (sequelize, Sequelize) {

    var Sport = sequelize.define('sport', {
      numberOfUsers: {
        type: Sequelize.INTEGER,
        allowNull: true
        //type: sequelize.ARRAY(sequelize.INTEGER), defaultValue: null
      }
    });

    // Sport.associate = function (models) {
    //   Sport.belongsTo(models.user, {
    //     onDelete: "CASCADE",
    //     foreignKey: {
    //       allowNull: true
    //     }
    //   }),
    //     Sport.belongsTo(models.sport, {
    //       onDelete: "CASCADE",
    //       foreignKey: {
    //         allowNull: true
    //       }
    //     });
  
    // }

    Sport.sync();
    return Sport;
    
  };