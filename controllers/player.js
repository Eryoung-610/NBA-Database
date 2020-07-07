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
    var bdlUrl = 'https://www.balldontlie.io/api/v1/players?per_page=50'
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
    axios.get(bdlUrl).then((apiResponse) => {
        var player = apiResponse.data.data
        console.log(player)
        res.render('player/show', { player })
    }).catch(err => {
        res.send(err)
    })
    
})

// export router
module.exports = router;