const express = require('express');
const router = express.Router();
const db = require('../models');
const {render} = require('ejs')
const ejsLayouts = require('express-ejs-layouts')
// import middleware
const flash = require('flash');
const passport = require("../config/ppConfig");
const axios = require('axios');

router.get('/', (req,res) => {
    var bdlUrl = 'https://www.balldontlie.io/api/v1/players'
    axios.get(bdlUrl).then((apiResponse) => {
        var player = apiResponse.data.data
        res.render('player/index.ejs', {player})
    }).catch(err=>{
        res.send(err)
    })
})

// export router
module.exports = router;