//budget API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

const budget = require('C:\\dev\\personal-budget\\budget.json');



app.get('/budget', (req, res) => {
    res.json(budget);
});


app.listen(port, () => {
    console.log(`API Served at http://localhost:${port}`)
});