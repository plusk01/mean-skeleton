var mongoose = require('mongoose');

module.exports = mongoose.model('Day', mongoose.Schema({
        title: String,
        description: String,
        location: {
            city: String,
            country: String
        },
        headerImgPath: String,
        weather: {
            temperature: Number, 
            description: String, 
            icon: String
        },
        pictures: [mongoose.Schema.Types.ObjectId]
    })
);