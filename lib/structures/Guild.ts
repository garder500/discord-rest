import { Client } from '../index';
import Base from './Base';
import GuildType from '../types/GuildType';
import { APIGuild, APIGuildWelcomeScreen, APIRole, APISticker } from 'discord-api-types/v10';

export default class Guild extends Base {
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
    constructor(client: Client, data: GuildType ) {
        super(client);
        this.id = data.id;
        this.name = data.name;
        this.icon = data.icon;
        this.iconHash = data.iconHash;
        this.splash = data.splash;
        this.discoverySplash = data.discoverySplash;
        this.owner = data.owner;
        this.ownerId = data.ownerId;
        this.permissions = data.permissions;
        this.region = data.region;
        this.afkChannelId = data.afkChannelId;
        this.afkTimeout = data.afkTimeout;
        this.widgetEnabled = data.widgetEnabled;
        this.widgetChannelId = data.widgetChannelId;
        this.verificationLevel = data.verificationLevel;
        this.defaultMessageNotifications = data.defaultMessageNotifications;
        this.explicitContentFilter = data.explicitContentFilter;
        this.roles = data.roles;
        this.emojis = data.emojis;
        this.features = data.features;
        this.mfaLevel = data.mfaLevel;
        this.applicationId = data.applicationId;
        this.systemChannelId = data.systemChannelId;
        this.systemChannelFlags = data.systemChannelFlags;
        this.rulesChannelId = data.rulesChannelId;
        this.maxPresences = data.maxPresences;
        this.maxMembers = data.maxMembers;
        this.vanityUrlCode = data.vanityUrlCode;
        this.description = data.description;
        this.banner = data.banner;
        this.premiumTier = data.premiumTier;
        this.premiumSubscriptionCount = data.premiumSubscriptionCount;
        this.preferredLocale = data.preferredLocale;
        this.publicUpdatesChannelId = data.publicUpdatesChannelId;
        this.maxVideoChannelUsers = data.maxVideoChannelUsers;
        this.approximateMemberCount = data.approximateMemberCount;
        this.approximatePresenceCount = data.approximatePresenceCount;
        this.welcomeScreen = data.welcomeScreen;
        this.nsfwLevel = data.nsfwLevel;
        this.stickers = data.stickers;
        this.premium_progress_bar_enabled = data.premium_progress_bar_enabled;
    }

    resolver(data: APIGuild ){
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