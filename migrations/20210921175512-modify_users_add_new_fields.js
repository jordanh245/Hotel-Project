'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    queryInterface.addColumn(
      "Hotels", 
      "hotelImg", 
       Sequelize.STRING );
    
    
    
    
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn("Hotels", "hotelImg")
  }
};
