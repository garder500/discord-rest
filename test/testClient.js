const { Client } = require('../src/index');

const client = new Client({ token: "OTU1MTE4OTQ0Nzc0MTQ0MDkw.GAvp2a.TcVPF61GYE2-b_f3x4USHKF6oX5xgbaOAMFF8w"});

console.log(client);

setTimeout(() => {
    require("fs").writeFileSync("/home/jeremy/Bureau/discord-rest/test/testClient.json", JSON.stringify(client.guilds.first().toJSON()));
}, 3000);