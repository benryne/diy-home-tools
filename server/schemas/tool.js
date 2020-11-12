const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const toolSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price:  {
        type: Number,
        required: true
    }
})

const Tool = mongoose.model('Tool',toolSchema);

module.exports = Tool;