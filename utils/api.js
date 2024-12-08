const axios = require("axios");

async function fetchChampionData() {
    const url = "https://ddragon.leagueoflegends.com/cdn/13.20.1/data/en_US/champion.json";
    const response = await axios.get(url);
    return response.data.data; 
}

function getChampionImage(championKey) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championKey}_0.jpg`;
}

module.exports = { fetchChampionData, getChampionImage };
