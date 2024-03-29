# NBA Database

## Heroku stopped free hosting. Looking into alternatives to host for deployment.

Link to site : https://nba-db-project.herokuapp.com/

![Screenshot1](https://github.com/Eryoung-610/Project2/blob/master/Screenshot1.JPG)
![Screenshot2](https://github.com/Eryoung-610/Project2/blob/master/Screenshot2.JPG)

NBA Database is a web based application revolving around the NBA and it's players. This database holds player rosters of all 30 NBA teams in addition to a player database with players dating back to 1979. As a small disclaimer, player statistics are limited to the current season.

## How to Use
Fork and clone

npm i install - for dependencies

sequelize db:seed:all to populate db

## Project Planning
Notes : As balldontlie API did not include player pictures, I had to create my own seeding file to accomodate for that. I had to manually input all 506 current NBA players into a 4000+ line long seeder file.
### As a basic MVP, from a user standpoint I would want to be able to retrieve data from balldontlie API with some additional information.
- View all 30 NBA teams and their rosters
- View all players with API call on the backend
- Create/Delete a custom made team
- Create a player and designate it to a team

**Stretch Goals**
- Function to search for a specific player
- Function to sort teams by conference
- Cross reference my DB to balldontlie API DB for player stats on roster page
- Profile picture for user

### API's used
- balldontlie (balldontlie.io)

### Database & Model Structure
- There were three objects that were involved in this project, therefore I needed three models to implement in my database

**Table: user**
| Column| Type|
|------|------|
|name |String|
|password| String|
|email| String|

**Table: team**
| Column| Type|
|------|------|
|full_name |String|
|Conference| String|
|logo| String|
|userId| Integer|


**Table: player**
| Column| Type|
|------|------|
|first_name |String|
|last_name| String|
|position| String|
|picture| String|
|teamId| Integer|

## Routing
### GET

**/** - show intro page

**/home** - show home page

**/issues** - show page with known issues

**/restartInfo** - show page with NBA restart information

**/profile** - show profile page for user

**/auth/register** - show register page for user

**/auth/logout** - logout user

**/player/** - Brings user to player index

**/player/new** - Brings user to new player creation page

**/player/:pageNum** - Different page to show all players

**/team/** - Show page with all teams

**/team/new** - Show new team creation page

**/team/created** - Show page with all new created teams

**/team/:id** - Show individual team page based on id

### POST
**/team/**- Create a team
**/player/** - Create a player
**/auth/register** - Create a user
**/auth/login** - Login as a user

### PUT
**/team/edit/:id** - Edit created team info

### DELETE
**/team/delete/:id** - Delete a created team


## Technologies Used
**API** balldontlie

**Node** Axios,BCrypt,Express, EJS, Express EJS Layouts, Express sessions, Helmet, Method-Override,Passport,Nodemon,Morgan,Sequelize
