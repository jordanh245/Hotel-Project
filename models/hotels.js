'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hotels.hasMany(models.Reservations, {
        foreignKey: 'hotelId'
      });
    }
  };
  Hotels.init({
    hotelName: DataTypes.STRING,
    hotelAddress: DataTypes.STRING,
    hotelState: DataTypes.STRING,
    hotelImg:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hotels',
  });
  return Hotels;
};