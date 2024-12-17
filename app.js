const express = require("express");
require('dotenv').config();


const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/main");

const app = express();
const dbURI = process.env.MONGODB_URI;


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", mainRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
