const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const mongoose = require("mongoose");
const path = require('path');
// const dotenv = require("dotenv");


//env config
require("dotenv").config();
// dotenv.config();

//router import
const userRoutes = require("./routes/userRoutes");
const blogsRoutes = require("./routes/blogsRoutes");

//mongodb connection
// connectDB();

//rest objecct
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Connected to mongoDB Database ${mongoose.connection.host}`.bgMagenta);
    })
    .catch((err) => {
        console.log(err.message);
    });
//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogsRoutes);

// statics files
app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})


// Port
const PORT = process.env.PORT || 8080;
//listen
const server = app.listen(process.env.PORT, () => {
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan
            .white
    );
});