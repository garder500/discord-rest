import { Client } from "./Client";
import { Base } from "./Base";
import { APIApplication, APIUser } from "discord-api-types/v10";
/**
 * Application class.
 * @category Structure
 * @example
 * ```js
 * const application = new Application(client);
 * ```
 * @extends Base
 */
export class Application extends Base {
    // discord application object
    // https://discord.com/developers/docs/resources/application#application-object-application-object
    id?: string;
    name?: string;
    description?: string;
    icon: string| null;
    cover_image?: string;
    rpc_origins?: string[];
    bot_public?: boolean;
    bot_require_code_grant?: boolean;
    owner?: APIUser;
    constructor(client: Client) {
        super(client);
        // setup fake default values
        this.id = "";
        this.name = "";
        this.description = "";
        this.icon = null;
        this.cover_image = "";
        this.rpc_origins = [];
        this.bot_public = false;
        this.bot_require_code_grant = false;
        this.owner = {
            id: "",
            username: "",
            discriminator: "",
            avatar: "",
        };
        this.resolver();
    }

    async resolver(): Promise<APIApplication> {
       return new Promise((resolve, reject) => {
            // use rest api to get application
            this.client.rest.get<APIApplication>(`/applications/@me`).then((application) => {
                this.id = application.id;
                this.name = application.name;
                this.description = application.description;
                this.icon = application.icon;
                this.cover_image = application.cover_image;
                this.rpc_origins = application.rpc_origins;
                this.bot_public = application.bot_public;
                this.bot_require_code_grant = application.bot_require_code_grant;
                this.owner = application.owner;
                resolve(application);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
