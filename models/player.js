'use strict';
module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define('player', {
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    height_feet: DataTypes.INTEGER,
    height_inches: DataTypes.INTEGER
  }, {});
  player.associate = function(models) {
    // associations can be defined here
  };
  return player;
};
