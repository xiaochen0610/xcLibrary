const express = require('express');
const fs = require('fs')
const PORT = process.env.PORT || 3001;
const PORT1 = process.env.PORT || 3002;
const PORT2 = process.env.PORT || 3003;
const PORT3 = process.env.PORT || 3004;



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


const userCard = express();

userCard.listen(PORT2, () => {
    console.log(`server listening on ${PORT2}`)
});

const dataUserCard = fs.readFileSync('././data-userCard.json');

userCard.get("/", (req, res) => {
    res.jsonp(JSON.parse(dataUserCard));
});


const userCardPage = express();

userCardPage.listen(PORT3, () => {
    console.log(`server listening on ${PORT3}`)
})

const dataUserCardPage = fs.readFileSync('././data-userCardPage.json');

userCardPage.get("/", (req, res) => {
    res.jsonp(JSON.parse(dataUserCardPage))
})
