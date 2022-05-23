import { Client } from "../index";

export default class Base {
    client: Client;
    constructor(client: Client){
        this.client = client;
    }
}

