// routes/showRoutes.js
const express = require('express');
const router = express.Router();
const { getShowDetails } = require('../controllers/showController');

// GET /show-details
router.get('/show-details', getShowDetails);

module.exports = router;
