const express = require('express');
const fs = require('fs')
const PORT = process.env.PORT || 3001;
const PORT1 = process.env.PORT || 3002;


const app = express();
//创建应用程序实例

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});

const data_zw = fs.readFileSync('./data-zw.json');


app.get("/", (req, res) => {
    res.jsonp(JSON.parse(data_zw));
});
//配置路由


const commend = express();

commend.listen(PORT1, () => {
    console.log(`server listening on ${PORT1}`)
});

const dataCommend = fs.readFileSync('././data-commend.json');

commend.get("/", (req, res) => {
    res.jsonp(JSON.parse(dataCommend));
});
