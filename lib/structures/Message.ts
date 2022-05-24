import { ChannelType } from '../types/ChannelType';
import { attachmentsType, EmbedType, MessageType, ReactionsType } from '../types/MessageType';
import { UserType } from '../types/UserType';
import { Base } from './Base';
import { Channel } from './Channel';
import { Client } from './Client';
import { Guild } from './Guild';
/**
 * Message class.
 * @category Structure
 * @extends Base
 * @property {MessageType} interface - The message interface.
 * @example
 * ```js
 * const message = new Message(client,{
 *  id: '123',
 *  channel_id: '123',
 *  guild_id: '123',
 *  author: {
 *      id: '123',
 *      username: 'test',
 *      discriminator: '1234',
 *      avatar: '123',
 *      bot: false,
 *      system: false,
 *  },
 *  content: 'test',
 *  timestamp: 123,
 *  edited_timestamp: 123,
 *  tts: false,
 *  mention_everyone: false,
 *  mentions: [],
 *  mention_roles: [],
 *  attachments: [],
 *  embeds: [],
 *  reactions: [],
 *  nonce: '123',
 *  pinned: false,
 *  webhook_id: '123',
 * })
 * ```
 */
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
    /**
     * Get the channel the message was sent in.
     * @returns {Promise<Channel>} A Channel promise.
     * @example
     * ```js
     * const channel = await message.getChannel();
     * console.log(channel.name);
     * ```
     */
    async getChannel(): Promise<Channel | null>{
        if(this.channel_id){
        return this.client.channels.fetch(this.channel_id);
        }else{
            return null;
        }
    }
    /**
     * Get the guild the message was sent in.
     * @return {Promise<Guild>} A Guild promise.
     * @example
     * ```js
     * const guild = await message.getGuild();
     * console.log(guild.name);
     * ```
     */
    async getGuild(): Promise<Guild | null>{
        if(this.guild_id){
        return this.client.guilds.fetch(this.guild_id);
        }else{
            return null;
        }
    }
}

