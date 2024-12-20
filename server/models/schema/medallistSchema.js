const mongoose = require('mongoose');

const MedallistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
    totalMedals: { type: Number, required: true },
    date: { type: Date, required: true }
});

const Medallist = mongoose.model('Medallist', MedallistSchema);

module.exports = Medallist;
