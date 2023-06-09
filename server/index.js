
const express = require('express');
const fs = require('fs')
const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});

const data = fs.readFileSync('./data.json')

app.get("/", (req, res) => {
    res.jsonp(JSON.parse(data));
});