const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/main");

const app = express();

mongoose.connect("mongodb+srv://wrubin1:PD03R2jE3uj99B8o@cluster0.6qgku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", mainRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
