const { Schema } = require('mongoose');

const gemSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    address: {
        type: String,
    },
    link: {
        type: String,
    },
    gemId: {
        type: String,
    }
});

module.exports = gemSchema;