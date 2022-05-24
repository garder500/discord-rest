import { UserType } from "./UserType";

export interface MessageType {
    // https://discord.com/developers/docs/resources/channel#message-object-message-types
    id?: string;
    type?: string;
    channel_id?: string;
    guild_id?: string;
    author?: UserType;
    member?: any;
    content?: string;
    timestamp?: string;
    edited_timestamp?: string;
    tts?: boolean;
    mention_everyone?: boolean;
    mentions?: UserType[];
    mention_roles?: string[];
    attachments?: attachmentsType[];
    embeds?: EmbedType[];
    reactions?: ReactionsType[];
    nonce?: string;
    pinned?: boolean;
    webhook_id?: string;
}

export interface EmbedType {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: string;
    color?: number;
    footer?: {
        text?: string;
        icon_url?: string;
        proxy_icon_url?: string;
    };
    image?: {
        url?: string;
        proxy_url?: string;
        height?: number;
        width?: number;
    };
    thumbnail?: {
        url?: string;
        proxy_url?: string;
        height?: number;
        width?: number;
    };
    video?: {
        url?: string;
        height?: number;
        width?: number;
    };
    provider?: {
        name?: string;
        url?: string;
    };
    author?: {
        name?: string;
        url?: string;
        icon_url?: string;
        proxy_icon_url?: string;
    };
    fields?: {
        name?: string;
        value?: string;
        inline?: boolean;
    }[];
}
    
export interface ReactionsType {
    count: number;
    me: boolean;
    emoji: {
        name: string;
        id: string;
        animated: boolean;
    };
}

export interface attachmentsType {
    id: string;
    filename: string;
    size: number;
    url: string;
    proxy_url: string;
    height: number;
    width: number;
}
