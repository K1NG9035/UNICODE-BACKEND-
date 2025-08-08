// controllers/episodeController.js
const axios = require('axios');

const getEpisodes = async (req, res) => {
    try {
        // First, fetch the show ID
        const showResponse = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=friends');
        const showId = showResponse.data.id;

        // Then, fetch all episodes
        const episodesResponse = await axios.get(`https://api.tvmaze.com/shows/${showId}/episodes`);

        res.status(200).json({
            success: true,
            message: "Friends episodes fetched successfully",
            totalEpisodes: episodesResponse.data.length,
            data: episodesResponse.data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching episodes",
            error: error.message
        });
    }
};

module.exports = { getEpisodes };
