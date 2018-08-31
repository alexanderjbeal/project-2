module.exports = function(sequelize, Sequelize) {

    const User = sequelize.define('User', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
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

    User.associate = function (models) {
        // Associating User with Game
        // When an User is deleted, also delete any associated Game
        User.hasMany(models.Game, {
            onDelete: "cascade"
        });
    };

    User.associate = function (models) {
        User.belongsToMany(models.Game, {
            through: {
                model: models.Sport
            },
            foreignKey: 'id'
        });
    }

    // User.associate = function(models) {
    //     // Associating User with Game
    //     // When a User is deleted, also delete any associated Games
    //     User.hasMany(models.Game, {
    //       onDelete: "cascade"
    //     });
    //   };

    User.sync();
    return User;

};