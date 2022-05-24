import { Client } from "./Client";
/**
 * Base class for all structures.
 * @category Structure
 */
export class Base {
    client: Client;
    constructor(client: Client){
        this.client = client;
    }
}

