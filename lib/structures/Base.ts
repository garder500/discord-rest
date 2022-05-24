import { Client } from "./Client";

export class Base {
    client: Client;
    constructor(client: Client){
        this.client = client;
    }
}

