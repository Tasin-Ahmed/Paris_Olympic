const mongoose = require('mongoose');

const MedalSchema = new mongoose.Schema({
    event: { type: String, required: true },
    medalType: { type: String, required: true, enum: ['Gold', 'Silver', 'Bronze'] },
    athlete: { type: String, required: true },
    country: { type: String, required: true },
    gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
    date: { type: Date, required: true }
});

const Medal = mongoose.model('Medal', MedalSchema);

module.exports = Medal;
