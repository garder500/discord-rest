import { RestManager } from "../rest/restManager";
import { ClientType } from "../types/ClientType";
import { UserType } from "../types/UserType";
import { User } from "./User";
import { UserController } from "../controller/UserController";
import { ChannelController } from "../controller/ChannelController";
import { GuildController } from "../controller/GuildController";
import { Application } from "./Application";
import { Oauth2 } from "./Oauth2";

/**
 * Client class.
 * @category Structure
 * @example
 * ```js
 * const client = new Client({
 *    token: "token"
 * });
 * ```
 */
export class Client {
    token: string;
    version: number | undefined;
    rest: RestManager;
    user?: User;
    application:Application;
    users: UserController;
    channels: ChannelController;
    guilds: GuildController;
    secret?: string;
    oauth2?: Oauth2;
    constructor(options: ClientType){
        this.token = options.token;
        this.version = options.version || 10;
        const rest = new RestManager(this.token, this.version);
        this.rest = rest;
        let user: UserType;
        this.application = new Application(this);
        this.users = new UserController(this);
        this.channels = new ChannelController(this);
        this.guilds = new GuildController(this);
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
     * Set 0auth2 credentials to authenticate with the Discord API.
     * @param {string} access_token The access token.
     * @example
     * ```js
     * client.setOauth2Token("token");
     * ```
     */
    setOauth2Secret(secret: string){
        this.secret = secret;
        this.oauth2 = new Oauth2(this);
    }

}
