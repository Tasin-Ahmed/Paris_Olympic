const mongoose = require("mongoose")

const URI = process.env.MONGO_URI;

const connectDB = async () =>{
    try {
        await mongoose.connect(URI);
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.error("Couldn't connect to database");
        process.exit(0);
    }
}
module.exports = connectDB