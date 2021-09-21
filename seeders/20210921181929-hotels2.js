'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hotels', [{
      hotelName: 'The Beverly Hills Hotel',
      hotelAddress: '9641 Sunset Boulevard, Beverly Hills, Los Angeles, CA 90210, United States of America ',
      hotelState: 'CA',
      hotelImg: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/23601233.jpg?k=9c40820c98150818afa5f2488b023482cfe93cffa59a2861ad1c4d9ee71b58e2&o=&hp=1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]); 
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hotels', null, {});
  }
   
  
};
