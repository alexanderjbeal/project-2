module.exports = function (sequelize, Sequelize) {
    var Sport = sequelize.define('sport', {
        sports_id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        playTime: {
            type: Sequelize.DATE,
            allowNull: true
        }, location: {
            type: Sequelize.STRING,
            allowNull: true
        },
        fullGame: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        timeStamp: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }

    });


    // sequelize.sync()
    //     .then(() => Sport.create({
    //         fullGame: true,
    //         playTime: new Date(1980, 6, 20),
    //         location: "Troost and Independence Ave"
    //     }))
    //     .then(jane => {
    //         console.log(jane.toJSON());
    //     });

    Sport.associate = function (models) {
        // We're saying that a Game should belong to an User
        // A Game can't be created without an User due to the foreign key constraint
        // Sport.belongsTo(models.user, {
        Sport.belongsTo(models.user, {
            ondelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    Sport.sync();
    return Sport;

};