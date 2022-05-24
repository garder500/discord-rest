import { RestManager } from "../rest/restManager";
import { ClientType } from "../types/ClientType";
import { UserType } from "../types/UserType";
import { User } from "./User";
import { UserController } from "../controller/UserController";
import { ChannelController } from "../controller/ChannelController";
import { GuildController } from "../controller/GuildController";

export class Client {
    token: string;
    version: number | undefined;
    rest: RestManager;
    user?: User;
    users: UserController;
    channels: ChannelController;
    guilds: GuildController;
    constructor(options: ClientType){
        this.token = options.token;
        this.version = options.version || 10;
        let rest = new RestManager(this.token, this.version);
        this.rest = rest;
        let user: UserType;
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

}
