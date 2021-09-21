'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startDate: {
        type: Sequelize.STRING
      },
      endDate: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
                model: 'Users',
                key: 'id',
                as: 'userId'
        }
      },
        hotelId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
                  model: 'Hotels',
                  key: 'id',
                  as: 'hotelId'
          }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reservations');
  }
};