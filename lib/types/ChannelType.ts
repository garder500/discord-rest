import User from "../structures/User";

export default interface ChannelType {
    // https://discord.com/developers/docs/resources/channel#channel-object-channel-types
    id: string;
    type: number;
    guild_id?: string;
    position?: number;
    permission_overwrites?: PermissionOverwrite[];
    name: string;
    topic?: string;
    nsfw?: boolean;
    last_message_id: string;
    bitrate?: number;
    user_limit?: number;
    recipients?: User[];
    icon?: string;
    owner_id?: string;
    application_id?: string;
    parent_id?: string;
    last_pin_timestamp?: number;
}

export interface PermissionOverwrite {
    id: string;
    type: string;
    allow: number;
    deny: number;
}

export enum ChannelEnum {
    GUILD_TEXT,
    DM,
    GUILD_VOICE,
    GROUP_DM,
    GUILD_CATEGORY,
    GUILD_NEWS,
    GUILD_NEWS_THREAD,
    GUILD_PUBLIC_THREAD,
    GUILD_PRIVATE_THREAD,
    GUILD_STAGE_VOICE,
    GUILD_DIRECTORY,
    GUILD_FORUM
}