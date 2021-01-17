const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: Object,
        required: true
    },
    projects: [{type: Schema.Types.ObjectId, ref: 'Project'}]

})

const User = mongoose.model('User',userSchema);

module.exports = User;