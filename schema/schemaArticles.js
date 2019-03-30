const mongoose = require('mongoose');

var articlesSchema = mongoose.Schema({
    smokingrolls: {
        brand: String,
        price: Number,
        description: String
    },
    filter: {
        brand: String,
        price: Number,
        description: String
    }
},{ timestamps: { createdAt: 'created_at' }})

module.exports = mongoose.model('Article', articlesSchema);