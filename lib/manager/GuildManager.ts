import { Client } from "../index";
import Guild from "../structures/Guild";
import GuildType from "../types/GuildType";
import CachedManager from "./CachedManager";

export default class GuildManager extends CachedManager {
    constructor(client: Client){
        super(client);
        (async() => {
            this.getAllGuilds();
        })();
    }

    private async getAllGuilds() {
        let guilds = await this.client.rest.get("users/@me/guilds");
        guilds.forEach(async(guild: GuildType) => {
            let fetchedGuild = await this.client.rest.get(`guilds/${guild.id}`);
            fetchedGuild.owner = guild.owner;
            fetchedGuild.permissions = guild.permissions;
            let currentGuild = new Guild(this.client, fetchedGuild);
            currentGuild.resolver(fetchedGuild);
            super.add(guild.id, currentGuild);
        });
    }
}