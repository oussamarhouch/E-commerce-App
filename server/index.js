require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8080;
const mongoDbUrl = process.env.MONGODB_URL;

mongoose.connect(mongoDbUrl, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});