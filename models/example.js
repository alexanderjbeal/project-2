module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};

module.exports = function(sequelize, DataTypes) {
  var Games = sequelize.define("Games", {
    location: DataTypes.STRING,
    time: DataTypes.DATE,
    limit: DataTypes.BOOLEAN,
    currentPlayers: DataType.BOOLEAN
  });
  return Games;
};
