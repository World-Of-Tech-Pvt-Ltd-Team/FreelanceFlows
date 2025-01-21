require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./Configuration/db_config');


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await connectDB(); // Connect to the database
});
