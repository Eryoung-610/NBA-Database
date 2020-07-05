const express = require('express');
const router = express.Router();
const db = require('../models');
const {render} = require('ejs')
const ejsLayouts = require('express-ejs-layouts')
// import middleware
const flash = require('flash');
const passport = require("../config/ppConfig");
const axios = require('axios');

// router.get('/home', function(req, res) {
//     res.send("hi");
// })


// export router
module.exports = router;