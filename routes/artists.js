const express = require("express");
const uuid = require("uuid");
var router = express.Router()
const artists = require('../Artists')


// GET ALL ARTISTS
router.get("", (req, res) => {
    res.json(artists)
})
// GET A SPECIFIC ARTIST
router.get("/:id", (req, res) => {
    artists.forEach(artist => {
        let foundArtist = artist.id == req.params.id
        console.log(foundArtist);
    })
    res.send("Done!")
})
// CREATE AN ARTIST
// UPDATE AN ARTIST
// DELETE AN ARTIST

module.exports = router