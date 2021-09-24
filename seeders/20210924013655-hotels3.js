'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hotels', [{
      hotelName: 'Four Seasons Hotel Los Angeles at Beverly Hills',
      hotelAddress: '300 S Doheny Dr Los Angeles ',
      hotelState: 'CA',
      hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/8a/39/07/front-drive.jpg?w=1200&h=-1&s=1',
      createdAt: new Date(),
      updatedAt: new Date()
      },{
        hotelName: 'NoMad Los Angeles',
        hotelAddress: '649 S Olive St Los Angeles',
        hotelState: 'CA',
        hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/45/34/f5/pool.jpg?w=1200&h=-1&s=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        hotelName: 'Four Seasons Hotel Westlake Village',
        hotelAddress: '2 Dole Dr Westlake Village ',
        hotelState: 'CA',
        hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/48/45/77/waterfall-lawn.jpg?w=1200&h=-1&s=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        hotelName: 'Terranea Resort',
        hotelAddress: '100 Terranea Way Rancho Palos Verdes',
        hotelState: 'CA',
        hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7d/99/74/pool.jpg?w=1200&h=-1&s=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        hotelName: 'The Inn Above Tide',
        hotelAddress: '30 El Portal Sausalito ',
        hotelState: 'CA',
        hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/19/a4/f1/view-of-the-hotel-facade.jpg?w=1200&h=-1&s=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        hotelName: 'Post Ranch Inn',
        hotelAddress: '47900 Highway 1 PO Box 219 Big Sur',
        hotelState: 'CA',
        hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d4/4a/99/post-ranch-coastal-exterior.jpg?w=1100&h=-1&s=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        hotelName: 'The Ritz-Carlton, Lake Tahoe',
        hotelAddress: '13031 Ritz-Carlton Highlands Court Truckee ',
        hotelState: 'CA',
        hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/8b/7c/e0/exterior.jpg?w=1200&h=-1&s=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        hotelName: 'Casa Palmero',
        hotelAddress: '1518 Cypress Drive Pebble Beach',
        hotelState: 'CA',
        hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/88/09/a1/20160225-144211-largejpg.jpg?w=1200&h=-1&s=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        hotelName: 'San Ysidro Ranch',
        hotelAddress: '900 San Ysidro Ln Montecito',
        hotelState: 'CA',
        hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/47/12/3d/property-ocean-view.jpg?w=1100&h=-1&s=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        hotelName: 'The St. Regis San Francisco',
        hotelAddress: '125 3rd St. San Francisco ',
        hotelState: 'CA',
        hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/f7/d5/91/exterior.jpg?w=1200&h=-1&s=1',
        createdAt: new Date(),
        updatedAt: new Date()
      }]); 
    },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hotels', null, {})
  }
};
