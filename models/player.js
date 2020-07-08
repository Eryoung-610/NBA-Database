'use strict';
module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define('player', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    position: DataTypes.STRING,
    picture: DataTypes.STRING,
    teamId: DataTypes.INTEGER
  }, {});
  player.associate = function(models) {
    // associations can be defined here
    models.player.belongsTo(models.team)
  };
  return player;
};