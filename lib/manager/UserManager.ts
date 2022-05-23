import RestManager from "../rest/restManager";
import UserType from "../types/UserType";
import { Client } from "../index";
import CachedManager from "../manager/CachedManager";
export default class UserManager extends CachedManager {
    constructor(client: Client){
        super(client);
    };

    
}