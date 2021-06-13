const express = require("express");
const { v4: uuidv4} = require("uuid");
var router = express.Router()
const artists = require('../Artists')

// 
// ROUTES
// #TODO USE A DB LIKE MONGO
// #TODO MAKE THE TEMPLATE VERSIONS OF THE ENDPOINTS FOR IMPOROVED VISUAL STIMULATION
// 
// GET ALL ARTISTS
router.get("", (req, res) => {
    res.json(artists)
})
// 
// GET A SPECIFIC ARTIST
router.get("/:id", (req, res) => {
    let errorMsg = `No Artist Found With The ID ${req.params.id}`
    let found = artists.some(artist => artist.id === parseInt(req.params.id))
    if (found) {
        res.json(artists.filter(artist => artist.id === parseInt(req.params.id)))
    } else {
        res.status(400)
        res.json({
            message: errorMsg
        })
    }
})
// 
// CREATE AN ARTIST
router.post("", (req, res) => {
    newArtist = {
        id: uuidv4(),
        artistName: req.body.name,
        age: req.body.age,
    }
    artists.push(newArtist)
    res.json(artists)
})
// 
// UPDATE AN ARTIST
router.put("/:id", (req, res) => {
    let errorMsg = `No Artist Found With The ID ${req.params.id}`
    let found = artists.some(artist => artist.id === parseInt(req.params.id))
    if (found) {
        let upd8Data = req.body
         artists.forEach(artist => {
            if (artist.id === parseInt(req.params.id)) {
                artist.artist_name = upd8Data.name ? upd8Data.name : artist.artist_name
                artist.age = upd8Data.age ? upd8Data.age : artist.age
            } 
        })
        res.json(artists)
    } else {
        res.status(400)
        res.json({
            message: errorMsg
        })
    }
})
// DELETE AN ARTIST

module.exports = router