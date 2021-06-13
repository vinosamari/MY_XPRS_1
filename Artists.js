const { v4: uuidv4 } = require("uuid");
const ARTISTS = [
    {
        id: uuidv4(),
        artist_name: "Pablo Maranzano Picasso",
        age: 124
    },
    {
        id: uuidv4(),
        artist_name: "Vincent Van Gough",
        age: 132
    },
    {
        id: uuidv4(),
        artist_name: "Leonardo Da Vinci",
        age: 194
    },
]

module.exports = ARTISTS