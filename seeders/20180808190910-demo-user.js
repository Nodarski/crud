'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      remote_id: '98162176287316278',
      username: 'John Doe'
    },{
      remote_id: '11241241241412412',
      username: 'testy1'
    },{
      remote_id: '23123421342344433',
      username: 'testy2'
    },{
      remote_id: '63463463463463464',
      username: 'testy3'
    },{
      remote_id: '737334553477346345',
      username: 'testy4'
    },{
      remote_id: '347484843522688634',
      username: 'testy5'
    },{
      remote_id: '528245656524562567',
      username: 'testy6'
    },{
      remote_id: '257483472456245625',
      username: 'testy7'
    },{
      remote_id: '548685673553464875',
      username: 'testy8'
    },{
      remote_id: '456345656565652456',
      username: 'testy9'
    },{
      remote_id: '455645657256265656',
      username: 'testy0'
    }], {});
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
