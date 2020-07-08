'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('players', [{
      first_name: 'Trae',
      last_name: 'Young',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60633/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Brandon',
      last_name: 'Goodwin',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/32161/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jeff',
      last_name: 'Teague',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/16/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Vince',
      last_name: 'Carter',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/356/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kevin',
      last_name: 'Huerter',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52793/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Treveon',
      last_name: 'Graham',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/12148/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Cam',
      last_name: 'Reddish',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/69535/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'DeAndre',
      last_name: 'Bembry',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/32145/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'De\'Andre',
      last_name: 'Hunter',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53037/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Charlie',
      last_name: 'Brown',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52947/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Clint',
      last_name: 'Capela',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37601/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Skal',
      last_name: 'Labissiere',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44992/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'John',
      last_name: 'Collins',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45122/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dewayne',
      last_name: 'Dedmon',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11849/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Bruno',
      last_name: 'Fernando',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/62057/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Damian',
      last_name: 'Jones',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30791/transparent_small_headshot.png',
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Carsen',
      last_name: 'Edwards',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52920/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Javonte',
      last_name: 'Green',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/12759/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tremont',
      last_name: 'Waters',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60468/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kemba',
      last_name: 'Walker',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/1426/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Romeo',
      last_name: 'Langford',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/69661/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Marcus',
      last_name: 'Smart',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24740/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Brad',
      last_name: 'Wanamaker',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/3875/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jaylen',
      last_name: 'Brown',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45455/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Gordon',
      last_name: 'Hayward',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/989/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Semi',
      last_name: 'Ojeleye',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31438/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jayson',
      last_name: 'Tatum',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52651/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Grant',
      last_name: 'Williams',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52998/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Daniel',
      last_name: 'Theis',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60058/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Robert',
      last_name: 'Williams',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53244/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tacko',
      last_name: 'Fall',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45113/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Enes',
      last_name: 'Kanter',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6456/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Vincent',
      last_name: 'Poirier',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/76016/transparent_small_headshot.png',
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Chris',
      last_name: 'Chiozza',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37809/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Spencer',
      last_name: 'Dinwiddie',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11989/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jeremiah',
      last_name: 'Martin',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45009/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kyrie',
      last_name: 'Irving',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6154/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tyler',
      last_name: 'Johnson',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/7508/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Joe',
      last_name: 'Harris',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5967/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Caris',
      last_name: 'LeVert',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24860/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Timothe',
      last_name: 'Luwawu-Cabarrot',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52285/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Garrett',
      last_name: 'Temple',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5705/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Justin',
      last_name: 'Anderson',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24810/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dzanan',
      last_name: 'Musa',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/68200/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Wilson',
      last_name: 'Chandler',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/330/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kevin',
      last_name: 'Durant',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/345/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Rodions',
      last_name: 'Kurucs',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/68203/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Taurean',
      last_name: 'Prince',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24646/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jarrett',
      last_name: 'Allen',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53393/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Nicolas',
      last_name: 'Claxton',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60318/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'DeAndre',
      last_name: 'Jordan',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/200/transparent_small_headshot.png',
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Joe',
      last_name: 'Chealey',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31643/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Devonte\'',
      last_name: 'Graham',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37664/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Malik',
      last_name: 'Monk',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53736/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Terry',
      last_name: 'Rozier',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31126/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dwayne',
      last_name: 'Bacon',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44946/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Caleb',
      last_name: 'Martin',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37653/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kobi',
      last_name: 'Simmons',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53406/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Nicolas',
      last_name: 'Batum',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/412/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Cody',
      last_name: 'Martin',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37654/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Miles',
      last_name: 'Bridges',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53740/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'PJ',
      last_name: 'Washington',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60416/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jalen',
      last_name: 'McDaniels',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53230/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ray',
      last_name: 'Spalding',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44999/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Bismack',
      last_name: 'Biyombo',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11053/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Cody',
      last_name: 'Zeller',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11250/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Guillermo',
      last_name: 'Hernangomez',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44893/transparent_small_headshot.png',
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ryan',
      last_name: 'Archidiacono',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24806/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Coby',
      last_name: 'White',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/69889/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Adam',
      last_name: 'Mokoka',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/76015/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Max',
      last_name: 'Strus',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52639/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Shaquille',
      last_name: 'Harrison',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24436/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tomas',
      last_name: 'Satoransky',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24233/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kris',
      last_name: 'Dunn',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24864/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Zach',
      last_name: 'LaVine',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30738/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Chandler',
      last_name: 'Hutchison',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/38342/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Denzel',
      last_name: 'Valentine',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/25550/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Otto',
      last_name: 'Porter Jr.',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11999/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Thaddeus',
      last_name: 'Young',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/380/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Lauri',
      last_name: 'Markkanen',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53404/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Luke',
      last_name: 'Kornet',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30792/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Wendell',
      last_name: 'Carter Jr',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60230/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Daniel',
      last_name: 'Gafford',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60087/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Cristiano',
      last_name: 'Felicio',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44903/transparent_small_headshot.png',
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Darius',
      last_name: 'Garland',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/70243/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Matt',
      last_name: 'Mooney',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/38335/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dean',
      last_name: 'Wade',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44986/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Matthew',
      last_name: 'Dellavedova',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/4138/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dante',
      last_name: 'Exum',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37597/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Collin',
      last_name: 'Sexton',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60062/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Sheldon',
      last_name: 'Mac',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/12544/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kevin',
      last_name: 'Porter Jr',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/70216/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Cedi',
      last_name: 'Osman',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44892/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Sir\'Dominic',
      last_name: 'Pointer',
      position: 'SF',
      picture: 'https://en.as.com/img/comunes/fotos/fichas/deportistas/silueta-generica-large.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dylan',
      last_name: 'Windler',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45772/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Alfonzo',
      last_name: 'McKinnie',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/7038/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jordan',
      last_name: 'Bell',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30724/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kevin',
      last_name: 'Love',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/283/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tristan',
      last_name: 'Thompson',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6364/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Andre',
      last_name: 'Drummond',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/12400/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Larry',
      last_name: 'Nance Jr',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11516/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ante',
      last_name: 'Zizic',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52284/transparent_small_headshot.png',
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Trey',
      last_name: 'Burke',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11734/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Luka',
      last_name: 'Doncic',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/68198/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'J.J',
      last_name: 'Barea',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/100/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Seth',
      last_name: 'Curry',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/1623/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jalen',
      last_name: 'Brunson',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45223/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Delon',
      last_name: 'Wright',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30765/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Antonius',
      last_name: 'Cleveland',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31423/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Josh',
      last_name: 'Reaves',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45066/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tim',
      last_name: 'Hardaway Jr',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6179/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Courtney',
      last_name: 'Lee',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/301/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Justin',
      last_name: 'Jackson',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37649/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Michael',
      last_name: 'Kidd-Gilchrist',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11374/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dorian',
      last_name: 'Finney-Smith',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11858/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Willie',
      last_name: 'Cauley-Stein',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24884/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Maxi',
      last_name: 'Kleber',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60967/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kristaps',
      last_name: 'Porzingis',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44888/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dwight',
      last_name: 'Powell',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6312/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Boban',
      last_name: 'Marjonovic',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44904/transparent_small_headshot.png',
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jamal',
      last_name: 'Burray',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44995/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Monte',
      last_name: 'Morris',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30665/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Troy',
      last_name: 'Daniels',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5236/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'PJ',
      last_name: 'Dozier',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45080/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Will',
      last_name: 'Barton',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6172/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Torrey',
      last_name: 'Craig',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6803/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Gary',
      last_name: 'Harris',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/25548/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Keita',
      last_name: 'Bates-Diop',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37750/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jerami',
      last_name: 'Grant',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24892/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Vlatko',
      last_name: 'Cancar',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60052/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Michael',
      last_name: 'Porter Jr',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60530/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Nikola',
      last_name: 'Jokic',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37604/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Paul',
      last_name: 'Millsap',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/482/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Mason',
      last_name: 'Plumlee',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/1630/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Noah',
      last_name: 'Vonleh',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31110/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Bol',
      last_name: 'Bol',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/69971/transparent_small_headshot.png',
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Langston',
      last_name: 'Galloway',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6129/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jordan',
      last_name: 'McRae',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6333/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Brandon',
      last_name: 'Knight',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6457/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Derrick',
      last_name: 'Rose',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/63/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Bruce',
      last_name: 'Brown',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52805/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Luke',
      last_name: 'Kennard',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44933/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Svi',
      last_name: 'Mykhailiuk',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37665/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Khyri',
      last_name: 'Thomas',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45144/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tony',
      last_name: 'Snell',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6059/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Sekou',
      last_name: 'Doumbouya',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/76006/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Donta',
      last_name: 'Hall',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44910/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Louis',
      last_name: 'King',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/69972/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Blake',
      last_name: 'Griffin',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/202/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Thon',
      last_name: 'Maker',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52280/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'John',
      last_name: 'Henson',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/3387/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Christian',
      last_name: 'Wood',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30890/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Justin',
      last_name: 'Patton',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45142/transparent_small_headshot.png',
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ky',
      last_name: 'Bowman',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52561/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Mychal',
      last_name: 'Mulder',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44994/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Chasson',
      last_name: 'Randle',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11546/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Stephen',
      last_name: 'Curry',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/148/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Damion',
      last_name: 'Lee',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11993/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jordan',
      last_name: 'Poole',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60514/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Klay',
      last_name: 'Thompson',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5334/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Andrew',
      last_name: 'Wiggins',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31937/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Juan',
      last_name: 'Toscano-Anderson',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11117/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Eric',
      last_name: 'Paschall',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/38379/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Alen',
      last_name: 'Smailagic',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/76012/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dragan',
      last_name: 'Bender',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52279/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Draymond',
      last_name: 'Green',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/2982/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Marquese',
      last_name: 'Chriss',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/46136/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kevon',
      last_name: 'Looney',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37915/transparent_small_headshot.png',
      teamId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Chris',
      last_name: 'Clemons',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/46251/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Russell',
      last_name: 'Westbrook',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/347/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'James',
      last_name: 'Harden',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/351/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Austin',
      last_name: 'Rivers',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11070/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Michael',
      last_name: 'Frazier',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24663/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Eric',
      last_name: 'Gordon',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/199/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ben',
      last_name: 'McLemore',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11686/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Thabo',
      last_name: 'Sefolosha',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/344/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'David',
      last_name: 'Nwaba',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31167/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Bruno',
      last_name: 'Caboclo',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37600/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jeff',
      last_name: 'Green',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/346/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'DeMarre',
      last_name: 'Carroll',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/233/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Danuel',
      last_name: 'House Jr',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24394/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'William',
      last_name: 'Howard',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/76017/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Robert',
      last_name: 'Covington',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/4724/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'P.J',
      last_name: 'Tucker',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24498/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tyson',
      last_name: 'Chandler',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/38/transparent_small_headshot.png',
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'T.J',
      last_name: 'McConnell',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6158/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Naz',
      last_name: 'Mitrou-Long',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24290/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Brian',
      last_name: 'Bowen II',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/61894/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Malcolm',
      last_name: 'Brogdon',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11101/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Victor',
      last_name: 'Oladipo',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6390/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Aaron',
      last_name: 'Holiday',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45386/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Edmond',
      last_name: 'Sumner',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37728/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Justin',
      last_name: 'Holiday',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5311/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jeremy',
      last_name: 'Lamb',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6380/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jakarr',
      last_name: 'Sampson',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/12121/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Doug',
      last_name: 'McDermott',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6513/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'T.J',
      last_name: 'Warren',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24256/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Alize',
      last_name: 'Johnson',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53566/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'TJ',
      last_name: 'Leaf',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53247/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Domantas',
      last_name: 'Sabonis',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/38429/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Myles',
      last_name: 'Turner',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37711/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Goga',
      last_name: 'Bitadze',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/76007/transparent_small_headshot.png',
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Landry',
      last_name: 'Shamet',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45437/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Patrick',
      last_name: 'Beverley',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/250/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Lou',
      last_name: 'Williams',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/378/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Reggie',
      last_name: 'Jackson',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/874/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kawhi',
      last_name: 'Leonard',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/4200/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Rodney',
      last_name: 'McGruder',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/2458/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Amir',
      last_name: 'Coffey',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52826/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Terance',
      last_name: 'Mann',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44950/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Johnathan',
      last_name: 'Motley',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30813/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Paul',
      last_name: 'George',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/1889/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Marcus',
      last_name: 'Morris Sr',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/2444/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'JaMychal',
      last_name: 'Green',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/551/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Montrezl',
      last_name: 'Harrell',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24839/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Patrick',
      last_name: 'Patterson',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/2507/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Joakim',
      last_name: 'Noah',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/61/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Mfiondu',
      last_name: 'Kabengele',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52680/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ivica',
      last_name: 'Zubac',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52287/transparent_small_headshot.png',
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Quinn',
      last_name: 'Cook',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11066/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Rajon',
      last_name: 'Rondo',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/29/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Alex',
      last_name: 'Caruso',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/25024/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Avery',
      last_name: 'Bradley',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/4763/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kentavious',
      last_name: 'Caldwell-Pope',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11367/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Danny',
      last_name: 'Green',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/83/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dion',
      last_name: 'Waiters',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6241/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'J.R',
      last_name: 'Smith',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/112/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Lebron',
      last_name: 'James',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/72/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kyle',
      last_name: 'Kuzma',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37799/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kostas',
      last_name: 'Antetokounmpo',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53157/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jared',
      last_name: 'Dudley',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/393/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Talen',
      last_name: 'Horton-Tucker',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/69668/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Devontae',
      last_name: 'Cacok',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/46336/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Anthony',
      last_name: 'Davis',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11373/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dwight',
      last_name: 'Howard',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/362/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Markieff',
      last_name: 'Morris',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/2445/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'JaVale',
      last_name: 'McGee',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/502/transparent_small_headshot.png',
      teamId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tyus',
      last_name: 'Jones',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37619/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ja',
      last_name: 'Morant',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/62077/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'De\'Anthony',
      last_name: 'Melton',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53030/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Grayson',
      last_name: 'Allen',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37618/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'John',
      last_name: 'Konchar',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/38950/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Marko',
      last_name: 'Guduric',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/76019/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dillon',
      last_name: 'Brooks',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/39256/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Josh',
      last_name: 'Jackson',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52744/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Yuta',
      last_name: 'Watanabe',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37908/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kyle',
      last_name: 'Anderson',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24784/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Anthony',
      last_name: 'Tolliver',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5581/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jontay',
      last_name: 'Porter',
      position: 'PF',
      picture: 'https://en.as.com/img/comunes/fotos/fichas/deportistas/silueta-generica-large.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Justise',
      last_name: 'Winslow',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37622/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Brandon',
      last_name: 'Clarke',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45655/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jaren',
      last_name: 'Jackson Jr',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/62285/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Gorgui',
      last_name: 'Dieng',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6406/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jonas',
      last_name: 'Valanciunas',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11051/transparent_small_headshot.png',
      teamId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Gabe',
      last_name: 'Vincent',
      position: 'PG',
      picture: 'https://en.as.com/img/comunes/fotos/fichas/deportistas/silueta-generica-large.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Goran',
      last_name: 'Dragic',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/396/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kendrick',
      last_name: 'Nunn',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30683/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Chris',
      last_name: 'Silva',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45084/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jimmy',
      last_name: 'Butler',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/2809/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tyler',
      last_name: 'Herro',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/69689/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Solomon',
      last_name: 'Hill',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/656/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Andre',
      last_name: 'Iguodala',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/376/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Duncan',
      last_name: 'Robinson',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45013/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'KZ',
      last_name: 'Okpala',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60748/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jae',
      last_name: 'Crowder',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6279/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Derrick',
      last_name: 'Jones Jr',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45396/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kyle',
      last_name: 'Alexander',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45094/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Udonis',
      last_name: 'Haslem',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/241/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kelly',
      last_name: 'Olynyk',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/2041/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Bam',
      last_name: 'Adebayo',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53731/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Meyers',
      last_name: 'Leonard',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5954/transparent_small_headshot.png',
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Frank',
      last_name: 'Mason III',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31935/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Eric',
      last_name: 'Bledsoe',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/2497/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Donte',
      last_name: 'DiVincenzo',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45225/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'George',
      last_name: 'Hill',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/448/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Sterling',
      last_name: 'Brown',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30644/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Pat',
      last_name: 'Connaughton',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11120/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kyle',
      last_name: 'Korver',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/477/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Wesley',
      last_name: 'Matthews',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/507/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Khris',
      last_name: 'Middleton',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/4789/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Thanasis',
      last_name: 'Antetokounmpo',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37606/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Cameron',
      last_name: 'Reynolds',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31280/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Giannis',
      last_name: 'Antetokounmpo',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30611/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Marvin',
      last_name: 'Williams',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/10/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ersan',
      last_name: 'Ilyasova',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/265/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'D.J',
      last_name: 'Wilson',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37735/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Brook',
      last_name: 'Lopez',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/300/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Robin',
      last_name: 'Lopez',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/395/transparent_small_headshot.png',
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jordan',
      last_name: 'McLaughlin',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37793/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Malik',
      last_name: 'Beasley',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44947/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Jarrett',
      last_name: 'Culver',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/62291/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Josh',
      last_name: 'Okogie',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52700/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'D\'Angelo',
      last_name: 'Russell',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37752/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Jacob',
      last_name: 'Evans III',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45135/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Kelan',
      last_name: 'Martin',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37679/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Jaylen',
      last_name: 'Nowell',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/63234/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Evan',
      last_name: 'Turner',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/3708/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Jarred',
      last_name: 'Vanderbilt',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60415/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Juancho',
      last_name: 'Hernangomez',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52282/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Jake',
      last_name: 'Layman',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24843/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'James',
      last_name: 'Johnson',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/65/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Omari',
      last_name: 'Spellman',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53774/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Naz',
      last_name: 'Reid',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/69736/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Karl-Anthony',
      last_name: 'Towns',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37817/transparent_small_headshot.png',
      teamId: 18,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      first_name: 'Lonzo',
      last_name: 'Ball',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53246/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Josh',
      last_name: 'Gray',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/25360/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Frank',
      last_name: 'Jackson',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52650/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jrue',
      last_name: 'Holiday',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/383/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Nickeil',
      last_name: 'Alexander-Walker',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60881/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'JJ',
      last_name: 'Redick',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/366/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Josh',
      last_name: 'Hart',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30695/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Darius',
      last_name: 'Miller',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/2505/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'E\'Twaun',
      last_name: 'Moore',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/3980/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Zylan',
      last_name: 'Cheatham',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37990/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Brandon',
      last_name: 'Ingram',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44931/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kenrich',
      last_name: 'Williams',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37709/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Derrick',
      last_name: 'Favors',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/2017/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Nicolo',
      last_name: 'Melli',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/76018/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Zion',
      last_name: 'Williamson',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/69536/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jaxson',
      last_name: 'Hayes',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/70968/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jahlil',
      last_name: 'Okafor',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37621/transparent_small_headshot.png',
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Elfrid',
      last_name: 'Payton',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11942/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Frank',
      last_name: 'Ntilikina',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60048/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dennis',
      last_name: 'Smith Jr',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52850/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kadeem',
      last_name: 'Allen',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37729/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Damyean',
      last_name: 'Dotson',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24746/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'RJ',
      last_name: 'Barrett',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/69533/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Reggie',
      last_name: 'Bullock',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6286/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Wayne',
      last_name: 'Ellington',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/286/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ignas',
      last_name: 'Brazdeikis',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/69791/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Theo',
      last_name: 'Pinson',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37650/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Moe',
      last_name: 'Harkless',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/12116/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kevin',
      last_name: 'Knox II',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60413/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Taj',
      last_name: 'Gibson',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/66/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Julius',
      last_name: 'Randle',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31118/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Bobby',
      last_name: 'Portis',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30845/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kenny',
      last_name: 'Wooten',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/63034/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Mitchell',
      last_name: 'Robinson',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/62053/transparent_small_headshot.png',
      teamId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Chris',
      last_name: 'Paul',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/314/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dennis',
      last_name: 'Schroder',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30613/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Hamidou',
      last_name: 'Diallo',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/59973/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Luguentz',
      last_name: 'Dort',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/70382/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Terrance',
      last_name: 'Ferguson',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60049/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Shai',
      last_name: 'Gilgeous-Alexander',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60411/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Andre',
      last_name: 'Roberson',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5919/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Deonte',
      last_name: 'Burton',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30685/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Darius',
      last_name: 'Bazley',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/76009/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Danilo',
      last_name: 'Gallinari',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/331/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Abdel',
      last_name: 'Nader',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/12275/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kevin',
      last_name: 'Hervey',
      position: 'PF',
      picture: 'https://en.as.com/img/comunes/fotos/fichas/deportistas/silueta-generica-large.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Isaiah',
      last_name: 'Roby',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52831/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Mike',
      last_name: 'Muscala',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/966/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Nerlens',
      last_name: 'Noel',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24886/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Steven',
      last_name: 'Adams',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24302/transparent_small_headshot.png',
      teamId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'D.J',
      last_name: 'Augustin',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Michael',
      last_name: 'Carter-Williams',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/12132/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Vic',
      last_name: 'Law',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37744/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Markelle',
      last_name: 'Fultz',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53534/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'James',
      last_name: 'Ennis III',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11256/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Evan',
      last_name: 'Hournier',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24232/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Wes',
      last_name: 'Iwundu',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31763/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Terrence',
      last_name: 'Ross',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5977/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Al-Farouq',
      last_name: 'Aminu',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5290/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Gary',
      last_name: 'Clark',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37613/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Aaron',
      last_name: 'Gordon',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30810/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jonathan',
      last_name: 'Isaac',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52679/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Melvin',
      last_name: 'Frazier Jr',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45104/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'B.J',
      last_name: 'Johnson',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31139/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Khem',
      last_name: 'Birch',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11121/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Nikola',
      last_name: 'Vucevic',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5094/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Mo',
      last_name: 'Bamba',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60943/transparent_small_headshot.png',
      teamId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Raul',
      last_name: 'Neto',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30620/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ben',
      last_name: 'Simmons',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45002/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Alec',
      last_name: 'Burks',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/1363/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Shake',
      last_name: 'Milton',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45077/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Furkan',
      last_name: 'Korkmaz',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52286/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Zhaire',
      last_name: 'Smith',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/62288/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Josh',
      last_name: 'Richardson',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11566/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Glenn',
      last_name: 'Robinson III',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24862/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Matisse',
      last_name: 'Thybulle',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/46144/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ryan',
      last_name: 'Broekhoff',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5165/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Marial',
      last_name: 'Shayok',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37672/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tobias',
      last_name: 'Harris',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6332/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Mike',
      last_name: 'Scott',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5228/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Joel',
      last_name: 'Embiid',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31932/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Al',
      last_name: 'Horford',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/12/transparent_small_headshot.png',
      createdAt: new Date(),
      updatedAt: new Date(),
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      first_name: 'Kyle',
      last_name: 'O\'Quinn',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/3372/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Norvel',
      last_name: 'Pelle',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/12119/transparent_small_headshot.png',
      teamId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ricky',
      last_name: 'Rubio',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/284/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Cameron',
      last_name: 'Payne',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31408/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jalen',
      last_name: 'Lecque',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/76014/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jevon',
      last_name: 'Carter',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37718/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jared',
      last_name: 'Harper',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52550/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Elie',
      last_name: 'Okobo',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/68201/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Devin',
      last_name: 'Booker',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37815/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ty',
      last_name: 'Jerome',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53038/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Mikal',
      last_name: 'Bridges',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37879/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Cameron',
      last_name: 'Johnson',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37658/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kelly',
      last_name: 'Oubre Jr',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37666/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tariq',
      last_name: 'Owens',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37837/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dario',
      last_name: 'Saric',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37598/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Chieck',
      last_name: 'Diallo',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44977/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Frank',
      last_name: 'Kaminsky',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11869/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Deandre',
      last_name: 'Ayton',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60079/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Aron',
      last_name: 'Baynes',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30508/transparent_small_headshot.png',
      teamId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jaylen',
      last_name: 'Adams',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37966/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Damian',
      last_name: 'Lillard',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5343/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'CJ',
      last_name: 'McCollum',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/2562/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Anfernee',
      last_name: 'Simons',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/68199/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Mario',
      last_name: 'Hezonja',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44889/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Gary',
      last_name: 'Trent Jr',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60234/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Trevor',
      last_name: 'Ariza',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/157/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Rodney',
      last_name: 'Hood',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11382/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Carmelo',
      last_name: 'Anthony',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/111/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jaylen',
      last_name: 'Hoard',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/70268/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Nassir',
      last_name: 'Little',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/69888/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Wenyen',
      last_name: 'Gabriel',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53734/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Zach',
      last_name: 'Collins',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53162/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Caleb',
      last_name: 'Swanigan',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45073/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Moses',
      last_name: 'Brown',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/70197/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jusuf',
      last_name: 'Nurkic',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37599/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Hassan',
      last_name: 'Whiteside',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/2834/transparent_small_headshot.png',
      teamId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'De\'Aaron',
      last_name: 'Fox',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53733/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kyle',
      last_name: 'Guy',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53035/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'DaQuan',
      last_name: 'Jeffries',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45980/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Cory',
      last_name: 'Joseph',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6363/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Yogi',
      last_name: 'Ferrell',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24835/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Bogdan',
      last_name: 'Bogdanovic',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37602/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Buddy',
      last_name: 'Hield',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24735/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Justin',
      last_name: 'James',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/46159/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kent',
      last_name: 'Bazemore',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/3738/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Corey',
      last_name: 'Brewer',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/281/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jabari',
      last_name: 'Parker',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/31065/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Harrison',
      last_name: 'Barnes',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6285/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Nemanja',
      last_name: 'Bjelica',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5985/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Marvin',
      last_name: 'Bagley III',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/61909/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Harry',
      last_name: 'Giles III',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52649/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Richaun',
      last_name: 'Holmes',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24525/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Alex',
      last_name: 'Len',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/12506/transparent_small_headshot.png',
      teamId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Patty',
      last_name: 'Mills',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/416/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dejounte',
      last_name: 'Murray',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/46143/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Bryn',
      last_name: 'Forbes',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24850/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Derrick',
      last_name: 'White',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/32925/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'DeMar',
      last_name: 'DeRozan',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/470/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Lonnie',
      last_name: 'Walker IV',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/60504/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Quinndary',
      last_name: 'Weatherspoon',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45028/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Marco',
      last_name: 'Belinelli',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/468/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Keldon',
      last_name: 'Johnson',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/69690/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Rudy',
      last_name: 'Gay',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/226/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Drew',
      last_name: 'Eubanks',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45988/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Chimezie',
      last_name: 'Metu',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45401/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Luka',
      last_name: 'Samanic',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/76008/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'LaMarcus',
      last_name: 'Aldridge',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/407/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Trey',
      last_name: 'Lyles',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37816/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tyler',
      last_name: 'Zeller',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/3396/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jakob',
      last_name: 'Poeltl',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37800/transparent_small_headshot.png',
      teamId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kyle',
      last_name: 'Lowry',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/160/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Paul',
      last_name: 'Watson',
      position: 'PG',
      picture: 'https://en.as.com/img/comunes/fotos/fichas/deportistas/silueta-generica-large.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Fred',
      last_name: 'VanVleet',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/25275/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Terence',
      last_name: 'Davis',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45062/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Matt',
      last_name: 'Thomas',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30666/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Stanley',
      last_name: 'Johnson',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37772/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Patrick',
      last_name: 'McCaw',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37995/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Norman',
      last_name: 'Powell',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/12144/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'OG',
      last_name: 'Anunoby',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/46480/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Rondae',
      last_name: 'Hollis-Jefferson',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30838/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Chris',
      last_name: 'Boucher',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/46591/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Serge',
      last_name: 'Ibaka',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/348/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Oshae',
      last_name: 'Brissett',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/61898/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Malcolm',
      last_name: 'Miller',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11538/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Pascal',
      last_name: 'Siakam',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/39061/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Marc',
      last_name: 'Gasol',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/228/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dewan',
      last_name: 'Hernandez',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52806/transparent_small_headshot.png',
      teamId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Mike',
      last_name: 'Conley',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/227/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Emmanuel',
      last_name: 'Mudiay',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44890/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Nigel',
      last_name: 'Williams-Goss',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/32268/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Justin',
      last_name: 'Wright-Foreman',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45306/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jordan',
      last_name: 'Clarkson',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6245/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Donovan',
      last_name: 'Mitchell',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/44998/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Bojan',
      last_name: 'Bogdanovic',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11056/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Miye',
      last_name: 'Oni',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53067/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Joe',
      last_name: 'Ingles',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/38400/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Royce',
      last_name: 'O\'Neale',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11583/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Rayjon',
      last_name: 'Tucker',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/46194/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Georges',
      last_name: 'Niang',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/24291/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jarrell',
      last_name: 'Brantley',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45464/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Juwan',
      last_name: 'Morgan',
      position: 'PF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/46481/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ed',
      last_name: 'Davis',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/3382/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tony',
      last_name: 'Bradley',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/52842/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Rudy',
      last_name: 'Gobert',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/30615/transparent_small_headshot.png',
      teamId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ish',
      last_name: 'Smith',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/5300/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'John',
      last_name: 'Wall',
      position: 'PG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/2509/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jerian',
      last_name: 'Grant',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6292/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Shabazz',
      last_name: 'Napier',
      position: 'G',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/6381/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Gary',
      last_name: 'Payton II',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/37868/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jerome',
      last_name: 'Robinson',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45234/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Bradley',
      last_name: 'Beal',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11887/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Garrison',
      last_name: 'Matthews',
      position: 'SG',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/46205/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Troy',
      last_name: 'Brown Jr',
      position: 'G-F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/63031/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Admiral',
      last_name: 'Schofield',
      position: 'SF',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45097/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Isaac',
      last_name: 'Bonga',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/68202/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Rui',
      last_name: 'Hachimura',
      position: 'F',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/53163/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Johnathan',
      last_name: 'Williams',
      position: 'PF',
      picture: 'https://en.as.com/img/comunes/fotos/fichas/deportistas/silueta-generica-large.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Davis',
      last_name: 'Bertans',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11058/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Moritz',
      last_name: 'Wagner',
      position: 'F-C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45014/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Thomas',
      last_name: 'Bryant',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/45742/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ian',
      last_name: 'Mahinmi',
      position: 'C',
      picture: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/player/446/transparent_small_headshot.png',
      teamId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Anzejs',
      last_name: 'Pasecniks',
      position: 'C',
      picture: 'https://en.as.com/img/comunes/fotos/fichas/deportistas/silueta-generica-large.png',
      teamId: 30,
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
