const express = require("express");
const { fetchChampionData, getChampionImage } = require("../utils/api");
const FavoriteChampion = require("../models/FavoriteChampion");
const router = express.Router();

router.get("/", (req, res) => res.render("index"));

router.get("/champions", async (req, res) => {
    const champions = await fetchChampionData();
    const championsWithImages = Object.keys(champions).map((key) => ({
        name: champions[key].name,
        title: champions[key].title,
        image: getChampionImage(key),
    }));
    res.render("champions", { champions: championsWithImages });
});

router.get("/add-favorite", (req, res) => res.render("add-favorite"));

router.post("/add-favorite", async (req, res) => {
    const { name, role } = req.body;
    const favorite = new FavoriteChampion({ name, role });
    await favorite.save();
    res.redirect("/favorites");
});

router.post("/reset-favorites", async (req, res) => {
    try {
        await FavoriteChampion.deleteMany({}); // Deletes all documents in the collection
        console.log("All favorites have been reset.");
        res.redirect("/favorites");
    } catch (err) {
        console.error("Error resetting favorites:", err);
        res.status(500).send("Error resetting favorites.");
    }
});

router.get("/favorites", async (req, res) => {
    const favorites = await FavoriteChampion.find();
    res.render("favorites", { favorites });
});

module.exports = router;
