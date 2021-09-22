'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hotels', [{
      hotelName: 'The Ritz-Carlton, Marina del Rey',
      hotelAddress: '4375 Admiralty Way, Marina Del Rey ',
      hotelState: 'CA',
      hotelImg: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/31/82/318244150.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
  },{
    hotelName: 'Rancho Valencia Resort & Spa',
    hotelAddress: '5921 Valencia Cir Rancho Santa Fe ',
    hotelState: 'CA',
    hotelImg: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/20429961.jpg?k=8f95b0826c98134f75d7d0c4bc1374a2ecaf7eb8d69c59de718ca3a391250d14&o=&hp=1',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
  hotelName: 'Hotel Bel-Air',
  hotelAddress: '701 Stone Canyon Rd. Los Angeles ',
  hotelState: 'CA',
  hotelImg: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/183710235.jpg?k=c2601801141934216824864c84e7993a6a9e1b0691e0a59e8171718cf8409d5d&o=&hp=1',
  createdAt: new Date(),
  updatedAt: new Date()
  },{
  hotelName: 'The Peninsula Beverly Hills',
  hotelAddress: '9882 Santa Monica Blvd, Beverly Hills ',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/45/0d/55/exterior.jpg?w=900&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'Fairmont Grand Del Mar',
  hotelAddress: '5300 Grand Del Mar Court, San Diego ',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/db/ae/7a/lobby.jpg?w=1100&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'Viceroy LErmitage Beverly Hills',
  hotelAddress: '9291 Burton Way, Beverly Hills',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/b1/bf/b7/viceroy-l-ermitage-highlights.jpg?w=1200&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'Auberge du Soleil, Auberge Resorts Collection',
  hotelAddress: '180 Rutherford Hill Rd, Rutherford ',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/08/0f/b8/pool.jpg?w=1200&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'The Lodge at Torrey Pines',
  hotelAddress: '11480 North Torrey Pines Road, La Jolla ',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ef/ad/0b/lodge-torrey-pines-palisade.jpg?w=1200&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'Rosewood Miramar Beach',
  hotelAddress: '1759 S Jameson Ln, Montecito',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/8e/be/b1/rosewood-miramar-beach.jpg?w=1200&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'Montage Laguna Beach',
  hotelAddress: '30801 South Coast Highway, Laguna Beach ',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/16/f0/be/restaurant.jpg?w=1100&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'Park Hyatt Aviara Resort, Golf Club & Spa',
  hotelAddress: '7100 Aviara Resort Dr, Carlsbad',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/8d/bb/30/park-hyatt-aviara-resort.jpg?w=1200&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'Kimpton La Peer Hotel',
  hotelAddress: '627 N La Peer Dr, West Hollywood',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/e3/99/c3/swimming-pool.jpg?w=1200&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'Solage, Auberge Resorts Collection',
  hotelAddress: '4375 Admiralty Way, Marina Del Rey ',
  hotelState: 'CA',
  hotelImg: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/23601233.jpg?k=9c40820c98150818afa5f2488b023482cfe93cffa59a2861ad1c4d9ee71b58e2&o=&hp=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'The Ritz-Carlton, San Francisco',
  hotelAddress: '600 Stockton Street at California Street, San Francisco ',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f4/35/13/exterior.jpg?w=1200&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'Bardessono',
  hotelAddress: '6526 Yount Street, Yountville ',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/1a/0a/8d/bardessono.jpg?w=1200&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'Rosewood Sand Hill',
  hotelAddress: '2825 Sand Hill Rd, Menlo Park ',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/83/06/d4/exterior-at-dusk.jpg?w=1200&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'Santa Monica Proper Hotel',
  hotelAddress: '700 Wilshire Blvd, Santa Monica',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4f/8c/82/restaurant.jpg?w=1200&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'The Resort at Pelican Hill',
  hotelAddress: '22701 Pelican Hill Road South,Newport Coast ',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/88/97/ec/the-resort-at-pelican.jpg?w=1200&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'The London West Hollywood',
  hotelAddress: '1020 North San Vicente Boulevard, West Hollywood',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/64/49/77/pool.jpg?w=1200&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
},{
  hotelName: 'Waldorf Astoria Beverly Hills',
  hotelAddress: '9850 Wilshire Boulevard, Beverly Hills, ',
  hotelState: 'CA',
  hotelImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d3/bc/1e/exterior.jpg?w=1100&h=-1&s=1',
  createdAt: new Date(),
  updatedAt: new Date()
}]); 
},
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hotels', null, {})
  }
}
