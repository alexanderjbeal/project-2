module.exports = function (sequelize, Sequelize) {

    var Games = sequelize.define('game', {
      numberOfUsers: {
        type: Sequelize.INTEGER,
        allowNull: true
        //type: sequelize.ARRAY(sequelize.INTEGER), defaultValue: null
      }
    });

    Games.associate = function (models) {
      Games.belongsTo(models.user, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: true
        }
      }),
        Games.belongsTo(models.sport, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: true
          }
        });
  
    }

    Games.sync();
    return Games;
    
  };