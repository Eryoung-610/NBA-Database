'use strict';
module.exports = (sequelize, DataTypes) => {
  const team = sequelize.define('team', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    arena: DataTypes.STRING,
    coach: DataTypes.STRING
  }, {});
  team.associate = function(models) {
    // associations can be defined here
  };
  return team;
};