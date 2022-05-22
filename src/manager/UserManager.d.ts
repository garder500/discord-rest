import RestManager from "../rest/restManager";
import UserType from "../types/UserType";
import Client from "../index";
export default class UserManager {
    user: UserType;
    rest: RestManager;
    constructor(client: Client, user: UserType);
    createDM(): Promise<any>;
    getDMChannel(): Promise<any>;
}
