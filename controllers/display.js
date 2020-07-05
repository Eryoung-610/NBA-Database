var express = require('express')
const {render} = require('ejs')
const router = express.Router();
let db = require('../models')
const axios = require('axios')

router.get('/home', (req, res) => {
    // var balldontlieUrl = 'https://www.balldontlie.io/api/v1/teams'
    // axios.get(balldontlieUrl).then((apiResponse) => {
    //     res.render('display/home')
    // })
    res.send("hi")
})

module.exports = router;