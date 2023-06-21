const express = require('express');
const client = require('./elasticsearch');


const app = express();

app.get('/conect', client.getClient)

app.get('/insert', client.insert)

app.get('/find', client.findAll)

app.listen(3333, () => console.log('Running'));


