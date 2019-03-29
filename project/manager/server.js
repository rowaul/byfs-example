

// jshint esverion: 6

const express = require('express');
const path = require('path');
const fs = require('file-system');

//sample
const app = express();

const port = 4000;
const myhost = '0.0.0.0';

app.get('/', (req, res) => {
    console.log('Sent res on how to struct data');
    res.send('Some response');
});

app.listen(port, myhost, () => {
    console.log(`Server is listening at ${myhost}:${port}...`);
});

