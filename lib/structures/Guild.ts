import { Client } from './Client';
import { Base } from './Base';
import { APIGuild, APIGuildWelcomeScreen, APIRole, APISticker } from 'discord-api-types/v10';
import { Channel } from './Channel';
import { ChannelType } from '../types/ChannelType';
/**
 * Guild class.
 * @link https://discord.com/developers/docs/resources/guild#guild-object
 * @category Structure
 * @extends Base
 * @example
 * ```js
 * const guild = new Guild(client,{
 * id: '123',
 * name: 'test',
 * icon: '123',
 * splash: '123',
 * owner_id: '123',
 * region: '123',
 * })
 * ```
 */
export class Guild extends Base {
    id:string;
    name:string;
    icon?:string| null;
    iconHash?:string| null;
    splash?:string| null;
    discoverySplash?:string| null;
    owner?:boolean| null;
    ownerId:string;
    permissions?:string| null;
    region?:string| null;
    afkChannelId?:string| null;
    afkTimeout?:number| null;
    widgetEnabled?:boolean| null;
    widgetChannelId?:string| null;
    verificationLevel:number;
    defaultMessageNotifications:number;
    explicitContentFilter:number;
    roles:Array<APIRole>;
    emojis:Array<Object>;
    features:Array<string>;
    mfaLevel:number;
    applicationId?:string| null;
    systemChannelId?:string| null;
    systemChannelFlags?:number| null;
    rulesChannelId?:string| null;
    maxPresences?:number| null;
    maxMembers?:number| null;
    vanityUrlCode?:string| null;
    description?:string| null;
    banner?:string| null;
    premiumTier:number;
    premiumSubscriptionCount?:number| null;
    preferredLocale?:string| null;
    publicUpdatesChannelId?:string| null;
    maxVideoChannelUsers?:number| null;
    approximateMemberCount?:number| null;
    approximatePresenceCount?:number | null;
    welcomeScreen?:APIGuildWelcomeScreen | null;
    nsfwLevel:number;
    stickers?:Array<APISticker> | null;
    premium_progress_bar_enabled:boolean;
    constructor(client: Client, data: APIGuild ) {
        super(client);
        this.id = data.id;
        this.name = data.name;
        this.icon = data.icon ;
        this.iconHash = data.icon_hash ;
        this.splash = data.splash ;
        this.discoverySplash = data.discovery_splash ;
        this.owner = data.owner ? true : false;
        this.ownerId = data.owner_id;
        this.permissions = data.permissions ;
        this.region = data.region ;
        this.afkChannelId = data.afk_channel_id ;
        this.afkTimeout = data.afk_timeout;
        this.widgetEnabled = data.widget_enabled;
        this.widgetChannelId = data.widget_channel_id ;
        this.verificationLevel = data.verification_level;
        this.defaultMessageNotifications = data.default_message_notifications;
        this.explicitContentFilter = data.explicit_content_filter;
        this.roles = data.roles ;
        this.emojis = data.emojis;
        this.features = data.features;
        this.mfaLevel = data.mfa_level;
        this.applicationId = data.application_id ;
        this.systemChannelId = data.system_channel_id ;
        this.systemChannelFlags = data.system_channel_flags;
        this.rulesChannelId = data.rules_channel_id ;
        this.maxPresences = data.max_presences ;
        this.maxMembers = data.max_members;
        this.vanityUrlCode = data.vanity_url_code ;
        this.description = data.description ;
        this.banner = data.banner ;
        this.premiumTier = data.premium_tier;
        this.premiumSubscriptionCount = data.premium_subscription_count;
        this.preferredLocale = data.preferred_locale;
        this.publicUpdatesChannelId = data.public_updates_channel_id ;
        this.maxVideoChannelUsers = data.max_video_channel_users;
        this.approximateMemberCount = data.approximate_member_count;
        this.approximatePresenceCount = data.approximate_presence_count;
        this.welcomeScreen = data.welcome_screen;
        this.nsfwLevel = data.nsfw_level;
        this.stickers = data.stickers;
        this.premium_progress_bar_enabled = data.premium_progress_bar_enabled;
    }
    /**
     * Get all channels in the guild.
     * @returns {Promise<Channel[]>} The guild's channels.
     * @example
     * ```js
     * guild.getChannels().then(channels => {
     *  console.log(channels);
     * });
     */
    async getChannels(): Promise<Channel[]> {
        return new Promise<Channel[]>((resolve, reject) => {
            this.client.rest.get<ChannelType[]>(`guilds/${this.id}/channels`).then((channels) => {
                resolve(channels.map(channel => new Channel(this.client, channel)));
            }).catch(err => {
                reject(err);
            });
        });
    } 

    /**
     * Delete the current guild.
     * @returns {Promise<null>} An empty promise.
     * @example
     * ```js
     * guild.delete().then(() => {
     *  console.log('Guild deleted.');
     * });
     */
    async delete(): Promise<null> {
        return new Promise<null>((resolve, reject) => {
            this.client.rest.delete<null>(`guilds/${this.id}`).then(() => {
                resolve(null);
            }).catch(err => {
                reject(err);
            });
        });
    }
    

    /**
     * Edit the current guild.
     * @param {APIGuild} [options] The guild settings to edit.
     * @returns {Promise<Guild>}
     * @example
     * ```js
     * guild.edit({
     *  name: 'Discord API',
     *  region: 'us-west',
     *  verificationLevel: 3,
     *  defaultMessageNotifications: 1,
     *  explicitContentFilter: 2,
     *  afkChannelId: '123456789012345678',
     * }).then(guild => {
     *  console.log(guild.name);
     *  //expected output => 'Discord API' 
     * });
     */
    async edit(options: APIGuild): Promise<Guild> {
        return new Promise<Guild>((resolve, reject) => {
            this.client.rest.patch<APIGuild>(`guilds/${this.id}`, options).then((data) => {
                resolve(new Guild(this.client, data));
            }).catch(err => {
                reject(err);
            });
        });
    }

    /**
     * Get the JSON representation of the guild.
     * @returns Current guild into a JSON object.
     * @example
     * ```js
     * guild.toJSON();
     * ```
     */
    toJSON(){
        return {
            id: this.id,
            name: this.name,
            icon: this.icon,
            iconHash: this.iconHash,
            splash: this.splash,
            discoverySplash: this.discoverySplash,
            owner: this.owner,
            ownerId: this.ownerId,
            permissions: this.permissions,
            region: this.region,
            afkChannelId: this.afkChannelId,
            afkTimeout: this.afkTimeout,
            widgetEnabled: this.widgetEnabled,
            widgetChannelId: this.widgetChannelId,
            verificationLevel: this.verificationLevel,
            defaultMessageNotifications: this.defaultMessageNotifications,
            explicitContentFilter: this.explicitContentFilter,
            roles: this.roles,
            emojis: this.emojis,
            features: this.features,
            mfaLevel: this.mfaLevel,
            applicationId: this.applicationId,
            systemChannelId: this.systemChannelId,
            systemChannelFlags: this.systemChannelFlags,
            rulesChannelId: this.rulesChannelId,
            maxPresences: this.maxPresences,
            maxMembers: this.maxMembers,
            vanityUrlCode: this.vanityUrlCode,
            description: this.description,
            banner: this.banner,
            premiumTier: this.premiumTier,
            premiumSubscriptionCount: this.premiumSubscriptionCount,
            preferredLocale: this.preferredLocale,
            publicUpdatesChannelId: this.publicUpdatesChannelId,
            maxVideoChannelUsers: this.maxVideoChannelUsers,
            approximateMemberCount: this.approximateMemberCount,
            approximatePresenceCount: this.approximatePresenceCount,
            welcomeScreen: this.welcomeScreen,
            nsfwLevel: this.nsfwLevel,
            stickers: this.stickers,
            premium_progress_bar_enabled: this.premium_progress_bar_enabled
        }
    }
    
}