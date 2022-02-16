
const express = require('express');

const port = 8000;

const app = express();

// mongoose
const db = require('./config/mongoose');

// middle for parse form data
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

// use base route
// route for home
app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log("Error while connection to the server", err);
        return;
    }
    console.log("Server running on port 8000");
});