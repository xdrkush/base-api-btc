// Import Module
const serve  = require("./server");

var request = require("request");

console.log(serve.config)

// Headers
const headers = {
    "content-type": "text/plain;"
};

module.exports = {
    getBlockCount: (req, res) => {
        var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`;
        var options = {
            url: `http://${serve.config.rpcuser}:${serve.config.rpcpassword}@127.0.0.1:7771/`,
            method: "POST",
            headers: headers,
            body: dataString
        };

        cb = (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const data = JSON.parse(body);
                res.send(data);
            }
        };

        request(options, cb);
    }
} 