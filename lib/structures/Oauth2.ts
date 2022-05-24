import { Client } from "./Client";
import { Base } from "./Base";
import { APIGuild, APIUser, RESTGetAPICurrentUserGuildsResult, RESTGetAPIUserResult, RESTPostOAuth2AccessTokenResult } from "discord-api-types/v10";
/**
 * 0auth2 class to manage Discord 0auth2 endpoints.
 * @category Structure
 * @example
 * ```js
 * const client = new Client({
 *   token: "token"
 * });
 * client.setOauth2Token("token");
 * ```
 * @extends Base
 */
export class Oauth2 extends Base {
    tokenObject?: RESTPostOAuth2AccessTokenResult;
    user?: APIUser;
    constructor(client: Client) {
        super(client);
    }
    /**
     * Get the URL to redirect to.
     * @param {string} redirect_uri The redirect URI.
     * @param {string} scope The scope.
     * @param {string} state The state.
     * @returns {string} The URL to redirect to.
     * @example
     * ```js
     * const url = client.getRedirectURL("https://example.com/callback", ["identify"], "state");
     * ```
     * @see https://discordapp.com/developers/docs/topics/oauth2#redirecting-users-to-the-authorization-page
     * @see https://discordapp.com/developers/docs/topics/oauth2#authorization-code-flow
     * @see https://discordapp.com/developers/docs/topics/oauth2#scopes
     * @see https://discordapp.com/developers/docs/topics/oauth2#scope-identify
     * @see https://discordapp.com/developers/docs/topics/oauth2#scope-email
     * @see https://discordapp.com/developers/docs/topics/oauth2#scope-guilds
     * @see https://discordapp.com/developers/docs/topics/oauth2#scope-guilds-join
     */
    getRedirectURL(redirect_uri: string, scope: string[], state = "prompt"): string {
        return `https://discordapp.com/api/oauth2/authorize?client_id=${this.client.application.id}&redirect_uri=${redirect_uri}&response_type=code&scope=${encodeURIComponent(scope.join(" "))}&state=${state}`;
    }
    /**
     * Get the access token.
     * @param {string} code The code.
     * @param {string} redirect_uri The redirect URI.
     * @returns {Promise<RESTPostOAuth2AccessTokenResult>} The token object.
     * @example
     * ```js
     * client.getAccessToken("code", "https://example.com/callback").then((token) => {
     *  console.log(token);
     * });
     * ```
     * @see https://discordapp.com/developers/docs/topics/oauth2#authorization-code-flow
     * @see https://discordapp.com/developers/docs/topics/oauth2#get-token-endpoint
     * @see https://discordapp.com/developers/docs/topics/oauth2#response-format
     */
    async getAccessToken(code: string, redirect_uri: string): Promise<RESTPostOAuth2AccessTokenResult> {
        return new Promise((resolve, reject) => {
            this.client.rest.post<RESTPostOAuth2AccessTokenResult>("/oauth2/token", {
                client_id: this.client.application.id,
                client_secret: this.client.secret,
                grant_type: "authorization_code",
                code,
                redirect_uri,
            }).then((token) => {
                this.tokenObject = token;
                resolve(token);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    /**
     * Refresh the access token.
     * @param {string} refresh_token The refresh token.
     * @returns {Promise<RESTPostOAuth2AccessTokenResult>} The token object.
     * @example
     * ```js
     * client.refreshAccessToken("refresh_token").then((token) => {
     *          console.log(token);
     * });
     * ```
     * @see https://discordapp.com/developers/docs/topics/oauth2#refreshing-tokens
     * @see https://discordapp.com/developers/docs/topics/oauth2#get-token-endpoint
     * @see https://discordapp.com/developers/docs/topics/oauth2#response-format
     */
    async refreshAccessToken(refresh_token: string): Promise<RESTPostOAuth2AccessTokenResult> {
        return new Promise((resolve, reject) => {
            this.client.rest.post<RESTPostOAuth2AccessTokenResult>("/oauth2/token", {
                client_id: this.client.application.id,
                client_secret: this.client.secret,
                grant_type: "refresh_token",
                refresh_token,
            }).then((token) => {
                this.tokenObject = token;
                resolve(token);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    /**
     * Revoke the access token.
     * @param {string} token The token.
     * @returns {Promise<void>}
     * @example
     * ```js
     * client.revokeAccessToken("token").then(() => {
     *      console.log("Token revoked");
     * });
     * ```
     * @see https://discordapp.com/developers/docs/topics/oauth2#revoking-tokens
     * @see https://discordapp.com/developers/docs/topics/oauth2#get-token-endpoint
     */
    async revokeAccessToken(token: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.rest.post<void>("/oauth2/revoke", {
                client_id: this.client.application.id,
                client_secret: this.client.secret,
                token,
            }).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    /**
     * Get the user.
     * @returns {Promise<RESTGetOAuth2User>} The user object.
     * @example
     * ```js
     * client.getUser().then((user) => {
     *     console.log(user);
     * });
     * ```
     * @see https://discordapp.com/developers/docs/topics/oauth2#get-user
     */
    async getUser(): Promise<RESTGetAPIUserResult> {
        return new Promise((resolve, reject) => {
            if(!this.tokenObject) return reject(new Error("No token object"));
            this.client.rest.get<RESTGetAPIUserResult>("/users/@me", { 
                Authorization: `Bearer ${this.tokenObject.access_token}`
            }).then((user) => {
                this.user = user;
                resolve(user);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    /**
     * Get the user's guilds.
     * @returns {Promise<RESTGetAPICurrentUserGuildsResult>} The guilds object.
     * @example
     * ```js
     * client.getGuilds().then((guilds) => {
     *    console.log(guilds);
     * });
     * ```
     * @see https://discordapp.com/developers/docs/topics/oauth2#get-guilds
     * @see https://discordapp.com/developers/docs/topics/guilds
     */
    async getGuilds(): Promise<RESTGetAPICurrentUserGuildsResult> {
        return new Promise((resolve, reject) => {
            if(!this.tokenObject) return reject(new Error("No token object"));
            this.client.rest.get<RESTGetAPICurrentUserGuildsResult>("/users/@me/guilds", {
                Authorization: `Bearer ${this.tokenObject.access_token}`
            }).then((guilds) => {
                resolve(guilds);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    /**
     * Join user to a guild.
     * @param {string} guild_id The guild ID.
     * @returns {Promise<RESTPostAPIGuildResult>} The guild object.
     * @example
     * ```js
     * client.joinGuild("guild_id").then((guild) => {
     *   console.log(guild);
     * });
     * ```
     * @see https://discordapp.com/developers/docs/topics/oauth2#join-guild
     * @see https://discordapp.com/developers/docs/topics/guilds
     */
    async joinGuild(guild_id: string): Promise<APIGuild> {
        return new Promise((resolve, reject) => {
            if(!this.tokenObject) return reject(new Error("No token object"));
            if(!this.user) return reject(new Error("No user object"));
            this.client.rest.post<APIGuild>("/guilds/"+guild_id+"/members/" + this.user?.id, {
                Authorization: `Bearer ${this.tokenObject.access_token}`
            }).then((guild) => {
                resolve(guild);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    

}

