const { Client } = require('../src/index.js');

const client = new Client({ token: "///" });

setTimeout(() => {
    console.log(client.application);
}, 1000);