const jsonp = require("jsonp");

export default function forumPageTask() {
    return new Promise((resolve, reject) => {
        jsonp("http://localhost:3001/", {}, (err, data) => {
            if (err) {
                reject(err.message);
            } else {
                resolve(data.result);
            }
        });
    });
}






    // let options = {
    //     //配置项
    //     host: 'localhost',
    //     port: 3001,
    //     path: '/',
    //     method: 'GET',
    // };

    // http.request(options, (res) => {
    //     var dataSteam = "";
    //     res.setEncoding("utf-8");

    //     res.on("data", (data) => {
    //         dataSteam += data;
    //     });

    //     res.on("error", reject);

    //     res.on("end", () => {
    //         let result = JSON.parse(dataSteam);
    //         if (result.code === 100) {
    //             resolve(result.result);
    //         } else {
    //             reject(result.message);
    //         }
    //     });
    // }).end();

