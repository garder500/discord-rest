import { Client } from "../index";
import Channel from "../structures/Channel";
import ChannelType from "../types/ChannelType";

export default class ChannelController{
    client: Client;
    constructor(client: Client){
        this.client = client;
    }
    async get(id: string): Promise<Channel>{
        return new Promise<Channel>((resolve, reject) => {
             this.client.rest.get<ChannelType>(`channels/${id}`).then((channel) => {
                 resolve(new Channel(this.client, channel));
             }).catch(err => {
                 reject(err);
             });
         });
    }
}