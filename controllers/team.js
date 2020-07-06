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
    db.team.findAll()
    .then((teams) => {
        res.render('team/index.ejs', {teams})
    }).catch(err => {
        res.send(err)
    })
})


// export router
module.exports = router;