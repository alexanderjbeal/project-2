module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define('User', {
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true,
            validate: {
                len: [1, 12]
            }
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true,
            validate: {
                len: [1, 15]
            }
        },
 
        username: {
            type: Sequelize.TEXT
        },
 
        about: {
            type: Sequelize.TEXT
        },
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        last_login: {
            type: Sequelize.DATE
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
    });

    User.associate = (models) => {

      models.User.belongsToMany(models.Game, {
        through: models.UserGame
      });
    };

    User.sync();
    return User;
    
};