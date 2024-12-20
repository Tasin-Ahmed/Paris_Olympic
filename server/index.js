require("dotenv").config()
const express = require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();

app.use(cors({ origin: 'http://localhost:3000',credentials: true }));
// Increase payload size limits
app.use(express.json({ limit: '50mb' })); // For JSON payloads
app.use(express.urlencoded({ limit: '50mb', extended: true })); // For URL-encoded payloads

app.use(cookieParser());
app.use (express.json());

const authRouter = require("./router/authRouter.js");
const pageRouter = require("./router/pageRouter.js");
const connectDB = require("./models/db/config.js")

app.use("/auth", authRouter);
app.use("/athlete", pageRouter);


const PORT = 5000;

connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
});