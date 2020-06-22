const mongoose = require('mongoose');

// connecting to local database:
let configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Mealplannr'

mongoose.connect(MONGODB_URI, configOptions)
    .then(() => {
        console.log('Yayyy Database is connected');
    })
    .catch(() => {
        console.log('Something went wrong!');
    })