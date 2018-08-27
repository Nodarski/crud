'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=1 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=2 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=22 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=32 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=3 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=4 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=5 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=6 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=7 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=8 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=9 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=10 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=11 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=12 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=13 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=14 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=15 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=16 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=17 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=18 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },{
      URL: 'google.com',
      title: 'test title, wow so cool, check it out!',
      thumbnail: 'https://loremflickr.com/200/200?random=19 ',
      subreddit: 'test',
      votes: Math.floor(1000 + Math.random() * 9000)
    },], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
