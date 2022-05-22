import UserManager from "./manager/UserManager";
import RestManager from "./rest/restManager";
import ClientType from "./types/ClientType";
import UserType from "./types/UserType";

export * from "./types/UserType";
export * from "./types/ClientType";
export * from "./rest/restManager";
export default class Client {
    token: string;
    version: number | undefined;
    rest: RestManager;
    user?: UserType;
    constructor(options: ClientType){
        this.token = options.token;
        this.version = options.version;
        this.rest = new RestManager(this.token, this.version);
        this.user = undefined;
    }

    /**
     * @description Get the user information
     * @returns {Promise<UserType>}
     * @memberof Client 
     * @example
     * client.getUser().then(user => {
     *    console.log(user);
     * });
     * 
     */

}