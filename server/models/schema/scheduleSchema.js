const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    event: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }, // HH:MM format
    venue: { type: String, required: true },
    category: { type: String, required: true },
    status: { type: String, required: true, enum: ['Scheduled', 'Completed', 'Postponed'] }
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);

module.exports = Schedule;
