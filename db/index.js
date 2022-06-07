const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://marcos:markolapadovani@cluster0.fe4kkjn.mongodb.net/?retryWrites=true&w=majority').then(result => console.log("Connected to db"))
mongoose.Promise = global.Promise

module.exports = mongoose;