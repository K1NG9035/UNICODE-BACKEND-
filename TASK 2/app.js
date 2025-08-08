// app.js
const express = require('express');
const app = express();

// Import Routes
const showRoutes = require('./routes/showRoutes');
const episodeRoutes = require('./routes/episodeRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/', showRoutes);
app.use('/', episodeRoutes);

// Default 404 Route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found — could this BE any more wrong?"
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
