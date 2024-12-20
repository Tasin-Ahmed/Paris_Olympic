const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
  code: { type: Number, required: true },
  current: { type: Boolean, required: true },
  name: { type: String, required: true },
  name_short: { type: String },
  name_tv: { type: String },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  function: { type: String },
  country_code: { type: String },
  country: { type: String },
  country_long: { type: String },
  nationality: { type: String },
  nationality_long: { type: String },
  nationality_code: { type: String },
  height: { type: Number },
  weight: { type: Number },
  disciplines: { type: [String] },
  events: { type: [String] },
  birth_date: { type: Date },
  birth_place: { type: String },
  birth_country: { type: String },
  residence_place: { type: String },
  residence_country: { type: String },
  nickname: { type: String },
  hobbies: { type: String },
  occupation: { type: String },
  education: { type: String },
  family: { type: String },
  lang: { type: [String] },
  coach: { type: String },
  reason: { type: String },
  hero: { type: String },
  influence: { type: String },
  philosophy: { type: String },
  sporting_relatives: { type: String },
}, { timestamps: true });

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;

// athelets
// medals
// schedule
// medallists
// events
// highlights
// landing page
// login
// signup