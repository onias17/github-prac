// Configuration
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// View engine
app.set('view engine', 'ejs');

require('dotenv').config();
const PORT = process.env.PORT;

// Home Route
app.get('/', (req, res) => {
    res.render('index');
});

// Listener
app.listen(PORT, () => console.log(
    console.log('port is working')
));