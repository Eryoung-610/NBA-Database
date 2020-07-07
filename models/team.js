'use strict';
module.exports = (sequelize, DataTypes) => {
  const team = sequelize.define('team', {
    full_name: DataTypes.STRING,
    conference: DataTypes.STRING,
    logo: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {});
  team.associate = function(models) {
    // associations can be defined here
    models.team.hasMany(models.player)
  };
  return team;
};