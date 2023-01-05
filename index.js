'use strict';

// const express = require('express');
import express from 'express'
// const AddressParse = require('address-parse');
import ParseAddress from './address-parse/parse/index.js';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/parse', (req, res) => {

    var all = req.query.all? req.query.all:false;
    console.log(req.query.keywords + all);
    var results = ParseAddress.parse(req.query.keywords, all);
    res.send(results);
});

// app.get('/getAreaByAddress', (req, res) => {
//     var results = Utils.getAreaByAddress({province: req.query.province, city: req.query.city});
//     res.send(results);
// });

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
