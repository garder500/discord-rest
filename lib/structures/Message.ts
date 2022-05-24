import { ChannelType } from 'discord-api-types/v10';
import { ChannelType } from '../types/ChannelType';
import { attachmentsType, EmbedType, MessageType, ReactionsType } from '../types/MessageType';
import { UserType } from '../types/UserType';
import { Base } from './Base';
import { Channel } from './Channel';
import { Client } from './Client';
import { Guild } from './Guild';

export class Message extends Base{
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
    constructor(client: Client, message: MessageType){
        super(client);
        this.id = message.id;
        this.type = message.type;
        this.channel_id = message.channel_id;
        this.guild_id = message.guild_id;
        this.author = message.author;
        this.member = message.member;
        this.content = message.content;
        this.timestamp = message.timestamp;
        this.edited_timestamp = message.edited_timestamp;
        this.tts = message.tts;
        this.mention_everyone = message.mention_everyone;
        this.mentions = message.mentions;
        this.mention_roles = message.mention_roles;
        this.attachments = message.attachments;
        this.embeds = message.embeds;
        this.reactions = message.reactions;
        this.nonce = message.nonce;
        this.pinned = message.pinned;
        this.webhook_id = message.webhook_id;
    }
    async getChannel(): Promise<Channel | null>{
        if(this.channel_id){
        return this.client.channels.fetch(this.channel_id);
        }else{
            return null;
        }
    }

    async getGuild(): Promise<Guild | null>{
        if(this.guild_id){
        return this.client.guilds.fetch(this.guild_id);
        }else{
            return null;
        }
    }
}

