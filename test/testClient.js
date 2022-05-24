const { Client, Guild } = require('../src/index');

const client = new Client({ token: "OTU1MTE4OTQ0Nzc0MTQ0MDkw.GAvp2a.TcVPF61GYE2-b_f3x4USHKF6oX5xgbaOAMFF8w" });

client.channels.get("926457605587611658").then(channel => {
        channel.send("Hello World! Je test ma librairie perso mdr").then(message => {
            console.log(message);
        }).catch(console.error);
}).catch(console.error);
