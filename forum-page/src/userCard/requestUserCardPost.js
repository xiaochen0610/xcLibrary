const jsonp = require("jsonp");

export default function userCardPostTask() {
    return new Promise((resolve, reject) => {
        jsonp("http://localhost:3004/", {}, (err, data) => {
            if (err) {
                reject(err.message);
            } else {
                resolve(data.result.data);
            }
        });
    });
}



