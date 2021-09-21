'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservations.belongsTo(models.Users, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
    });
    Reservations.belongsTo(models.Hotels, {
      foreignKey: 'hotelId',
      onDelete: 'CASCADE'
  });
    }
  };
  Reservations.init({
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    hotelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservations',
  });
  return Reservations;
};