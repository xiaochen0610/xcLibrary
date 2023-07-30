const jsonp = require('jsonp');

export default function forumPageCommendTask() {
    return new Promise((resolve, reject) => {
        jsonp("http://localhost:3002/", {}, (err, data) => {
            if (err) {
                reject(err.message);
            } else {
                resolve(data.result.data);
            }
        });
    });
}


