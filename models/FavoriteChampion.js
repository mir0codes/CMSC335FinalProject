const mongoose = require("mongoose");

const favoriteChampionSchema = new mongoose.Schema({
    name: String,
    role: String,
    dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FavoriteChampion", favoriteChampionSchema);
