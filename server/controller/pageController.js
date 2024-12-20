const Athelets = require("../models/schema/athleteSchema.js")
const Medallists = require("../models/schema/medallistSchema.js")
const Medals = require("../models/schema/medalsSchema.js")
const Schedules = require("../models/schema/scheduleSchema.js")

const getAtheletes = async (req, res) => {
    // console.log(req.params.id);
    try {
        const athelets = await Athelets.find();
        return res.status(200).send({ athelets });
    } catch (error) {
        return res.status(500).json({ error: 'Server Error' });
    }
    // const id = req.params.id;

};
const getMedallists = async (req, res) => {
    // console.log(req.params.id);
    try {
        const medallists = await Medallists.find();
        return res.status(200).send({ medallists });
    } catch (error) {
        return res.status(500).json({ error: 'Server Error' });
    }
    // const id = req.params.id;

};
const getMedals = async (req, res) => {
    // console.log(req.params.id);
    try {
        const medals = await Medals.find();
        return res.status(200).send({ medals });
    } catch (error) {
        return res.status(500).json({ error: 'Server Error' });
    }
    // const id = req.params.id;

};
const getSchedules = async (req, res) => {
    console.log(req.query);
    const { page = 1, date, discipline, venue } = req.query;
    const recordsPerPage = 10;
    try {
        const schedules = await Schedules.find();
        let filteredData = schedules;
        // if (date) {
        //   filteredData = filteredData.filter((event) => event.day === date);
        // }
        if (discipline) {
            // console.log(filteredData);
            // filteredData = filteredData.filter((event) => event.discipline === discipline);

            filteredData = filteredData.filter((event) => event.discipline && event.discipline.includes(discipline));
        }
        if (venue) {
            // console.log(venue);

            //   filteredData = filteredData.filter((event) => event.venue.includes(venue));
            filteredData = filteredData.filter((event) => event.venue && event.venue.includes(venue));

            //   console.log(filteredData);

        }

        const totalRecords = filteredData.length;
        const totalPages = Math.ceil(totalRecords / recordsPerPage);
        const start = (page - 1) * recordsPerPage;
        const paginatedData = filteredData.slice(start, start + recordsPerPage);
        return res.status(200).send({ schedules: paginatedData, totalRecords, totalPages });
    } catch (error) {
        return res.status(500).json({ error: 'Server Error' });
    }
    // const id = req.params.id;


};
module.exports = { getAtheletes, getMedallists, getMedals, getSchedules }