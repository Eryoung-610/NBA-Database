const express = require('express');
const router = express.Router();
const db = require('../models');
const { render } = require('ejs')
const ejsLayouts = require('express-ejs-layouts')
// import middleware
const flash = require('flash');
const passport = require("../config/ppConfig");
const axios = require('axios');

router.get('/', (req, res) => {
    pageNum = 1;
    var bdlUrl = 'https://www.balldontlie.io/api/v1/players?per_page=50&page=' + pageNum
    axios.get(bdlUrl).then((apiResponse) => {
        var player = apiResponse.data.data
        res.render('player/index.ejs', { player })
    }).catch(err => {
        res.send(err)
    })
})

router.get('/:id', (req, res) => {
    let playerId = req.params.id
    var bdlUrl = "https://www.balldontlie.io/api/v1/players/" + playerId
    var statUrl = "https://www.balldontlie.io/api/v1/season_averages?player_ids[]=" + playerId
    axios.all([
        axios.get(bdlUrl),
        axios.get(statUrl)
    ]).then(axios.spread((playerResponse,statsResponse) => {
        var playerDetails = playerResponse.data
        var playerStats = statsResponse.data
        res.render('player/show', {playerDetails, playerStats})
    })).catch(err => {
        res.send("HELHOELHEOl")
    })
})

router.post('/', (req,res) => {
    db.player.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        position: req.body.position,
        picture: req.body.picture,
        teamId: req.body.teamId
    }).then((response) => {
        res.redirect('/')
    }).catch(err => {
        res.send(err)
    })
})

// export router
module.exports = router;