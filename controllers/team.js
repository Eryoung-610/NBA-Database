const express = require('express');
const router = express.Router();
const db = require('../models');
const { render } = require('ejs')
const ejsLayouts = require
const override = require('method-override')('express-ejs-layouts')
// import middleware
const flash = require('flash');
const passport = require("../config/ppConfig");
const axios = require('axios');

router.get('/', (req, res) => {
    db.team.findAll()
        .then((teams) => {
            res.render('team/index.ejs', { teams })
        }).catch(err => {
            res.send(err)
        })
})

router.get('/new', (req, res) => {
    db.team.findAll()
        .then((teams) => {
            res.render('team/new', { teams })
        }).catch(err => {
            res.status(500).send("error")
        })
})

router.get('/created', (req,res) => {
    db.team.findAll()
    .then((teams) => {
        res.render('team/created', { teams })
    }).catch(err => {
        res.status(400).render("views/home")
    })
})

router.get('/:id', (req, res) => {
    db.team.findOne({
        where: { id: req.params.id },
        include: [db.player]
    })
        .then((team) => {
            res.render('team/show', { team })
        }).catch(err => {
            res.send(err)
        })
})

router.post('/', (req, res) => {
    db.team.findOrCreate({
        where: {
            full_name: req.body.name,
            conference: req.body.conference,
            logo: req.body.logo,
            userId: req.body.userId
        }
    }).then((response) => {
        res.redirect('/team/created')
    }).catch(err => {
        res.send(err)
    })
})

router.delete('/delete/:id', (req, res) => {
    db.team.destroy({
        where: {
            id: req.params.id
        }
    }).then(
        res.redirect("/team")
    )
})

// UPDATE
router.put('/edit/:id', (req, res) => {
    db.team.update({
        full_name: req.body.name,
        conference: req.body.conference,
        logo: req.body.logo,
        userId: req.body.userId
    }, {
        where: {
           id: req.params.id 
        }
    }).then(updated => {
        res.redirect('/team')
    }).catch(err => {
        res.send(err)
    });
})


// export router
module.exports = router;