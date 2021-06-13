const express = require("express");
const app = express()
const port = 3333
const logger = require('./middleware/logger')

// ROUTER MIDDLEWARE
// app.use(logger)
app.use('/artists', require('./routes/artists'))

app.listen(process.env.PORT || port, () => {
    console.log(`✅  SERVER LISTENING ON PORT ${port}`);
})
