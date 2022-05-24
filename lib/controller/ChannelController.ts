import { Client } from "../structures/Client";
import { Channel } from "../structures/Channel";
import { ChannelType } from "../types/ChannelType";

export class ChannelController{
    client: Client;
    constructor(client: Client){
        this.client = client;
    }
    async fetch(id: string): Promise<Channel>{
        return new Promise<Channel>((resolve, reject) => {
             this.client.rest.get<ChannelType>(`channels/${id}`).then((channel) => {
                 resolve(new Channel(this.client, channel));
             }).catch(err => {
                 reject(err);
             });
         });
    }
    
    /**
     * Fetches all channels in a guild.
     * @param {string} guildId The id of the guild.
     * @returns {Promise<Channel[]>}
     * @memberof ChannelController
     * @example
     * ```js
     * client.channels.fetchAll("12345678901234567").then(channels => {
     *   console.log(channels);
     * });
     * ```
     */
    async fetchAll(guildId: string): Promise<Channel[]>{
        return new Promise<Channel[]>((resolve, reject) => {
             this.client.rest.get<ChannelType[]>(`guilds/${guildId}/channels`).then((channels) => {
                 resolve(channels.map(channel => new Channel(this.client, channel)));
             }).catch(err => {
                 reject(err);
             });
         });
    }

}