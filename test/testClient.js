const { Client } = require('../src/index.js');

const client = new Client({ token: "//////" });

client.guilds.fetch("919356120466857984").then(guild => {
    guild.getChannels().then(channels => {
        channels.forEach(channel => {
            if (channel.name === "global-chat") {
                channel.send("Hello World!").then(message => {
                    console.log(message);
                });
            }
        });
    });
});

