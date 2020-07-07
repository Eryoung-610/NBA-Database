'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('teams', [{
        full_name: 'Atlanta Hawks',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/11/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Boston Celtics',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/1/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Brooklyn Nets',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/2/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Charlotte Hornets',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/12/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Chicago Bulls',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/6/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Cleveland Cavaliers',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/7/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Dallas Mavericks',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/21/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Denver Nuggets',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/26/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Detroit Pistons',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/8/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Golden State Warriors',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/16/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Houston Rockets',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/22/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Indiana Pacers',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/9/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Los Angeles Clippers',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/17/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Los Angeles Lakers',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/18/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Memphis Grizzlies',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/23/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Miami Heat',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/13/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Milwaukee Bucks',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/10/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Minnesota Timerwolves',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/27/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'New Orleans Pelicans',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/24/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'New York Knicks',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/3/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Oklahoma City Thunder',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/28/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Orlando Magic',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/14/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Philadelphia 76ers',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/4/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Phoenix Suns',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/19/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Portland Trail Blazers',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/29/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Sacramento Kings',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/20/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'San Antonio Spurs',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/25/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Toronto Raptors',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/5/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Utah Jazz',
        conference: 'West',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/30/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        full_name: 'Washington Wizards',
        conference: 'East',
        logo: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/15/logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
