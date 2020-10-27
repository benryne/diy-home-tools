const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tools: [Schema.Types.ObjectId],
    cost: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;