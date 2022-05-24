import { Client } from "../structures/Client";
import { Guild } from "../structures/Guild";
import { APIGuild } from 'discord-api-types/v10';

export class GuildController{
    client: Client;
    constructor(client: Client){
        this.client = client;
    }
    async fetch(id: string): Promise<Guild>{
        return new Promise<Guild>((resolve, reject) => {
             this.client.rest.get<APIGuild>(`guilds/${id}`).then((guild) => {
                 resolve(new Guild(this.client, guild));
             }).catch(err => {
                 reject(err);
             });
         });
    }
}
