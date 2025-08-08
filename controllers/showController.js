// controllers/showController.js
const axios = require('axios');

const getShowDetails = async (req, res) => {
    try {
        const response = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=friends');
        res.status(200).json({
            success: true,
            message: "Friends show details fetched successfully",
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching show details",
            error: error.message
        });
    }
};

module.exports = { getShowDetails };
