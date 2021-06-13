//
// IMPORTS & VARIABLES
const express = require("express");
const app = express()
const port = 3333
const logger = require('./middleware/logger')

// INITIALIZE MIDDLEWARE
// app.use(logger)

//  ENABLE EXPRESS TO READ FORM DATA AND PARSE DATA FROM THE REQUEST BODY
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// 
// GET ALL ENDPOINTS FOR '/artists'
app.use('/artists', require('./routes/artists'))

// 
// API HOMEPAGE
// #TODO MAKE IT A TEMPLATE
app.get("/", (req, res) => {
    res.json({
        message: "👍🏾 You've successfully connected to the API.",
        urls: 
            {
                allArtists: "http://localhost:3333/artists",
                oneArtist: "http://localhost:3333/artists/:id",
            }

    })
})

// 
// SET UP THE SERVER TO LISTEN VIA THE PORT
app.listen(process.env.PORT || port, () => {
    console.log(`✅  SERVER LISTENING ON PORT ${port}`);
})
