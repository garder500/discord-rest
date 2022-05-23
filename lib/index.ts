import RestManager from "./rest/restManager";
import ClientType from "./types/ClientType";
import UserType from "./types/UserType";
import User from "./structures/User";
export * from "./types/UserType";
export * from "./types/ClientType";
export * from "./rest/restManager";
export class Client {
    token: string;
    version: number | undefined;
    rest: RestManager;
    user?: User;
    constructor(options: ClientType){
        this.token = options.token;
        this.version = options.version || 10;
        let rest = new RestManager(this.token, this.version);
        this.rest = rest;
        let user: UserType;
        (async() => {
            user = await rest.get("users/@me");
            if(!user.id){
                throw new Error("Invalid token");
            }else{
                this.user = new User(this, user);
            }
        })();
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
