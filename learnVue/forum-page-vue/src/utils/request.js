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