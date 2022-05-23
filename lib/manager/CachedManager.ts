import { Client } from "../index";
import CollectionManager from "./CollectionManager";
// Make a class called CachedManager to store a collection and cache it (the class need to use the property of an Object and a Map)
export default class CachedManager extends CollectionManager{
    client: Client;
    constructor(client: Client){
        super();
        this.client = client;
    }
}
