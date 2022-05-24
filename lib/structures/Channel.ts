import { Base } from "./Base";
import { Client } from "./Client";
import { User }from "./User";
import { ChannelType, PermissionOverwrite, ChannelEnum} from "../types/ChannelType";
import { MessageType } from "../types/MessageType";
import { Message } from "./Message";

export class Channel extends Base {
    // add properties here
    id: string;
    type: number | string;
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
    constructor(client: Client, channel: ChannelType) {
        super(client);
        this.id = channel.id;
        this.type = channel.type;
        this.guild_id = channel.guild_id;
        this.position = channel.position;
        this.permission_overwrites = channel.permission_overwrites;
        this.name = channel.name;
        this.topic = channel.topic;
        this.nsfw = channel.nsfw;
        this.last_message_id = channel.last_message_id;
        this.bitrate = channel.bitrate;
        this.user_limit = channel.user_limit;
        this.recipients = channel.recipients;
        this.icon = channel.icon;
        this.owner_id = channel.owner_id;
        this.application_id = channel.application_id;
        this.parent_id = channel.parent_id;
        this.last_pin_timestamp = channel.last_pin_timestamp;
        this.checkCurrentType();
    }

    private checkCurrentType() {
       // reformate current Class, delete unused properties of the class
        switch (this.type) {
            case ChannelEnum.GUILD_TEXT:
                this.type ="GUILD_TEXT";
                delete this.recipients;
                delete this.user_limit;
                delete this.bitrate;
                break;
            case ChannelEnum.GUILD_VOICE:
                this.type ="GUILD_VOICE";
                delete this.recipients;
                break;
            case ChannelEnum.GUILD_STAGE_VOICE:
                this.type ="GUILD_STAGE_VOICE";
                delete this.recipients;
                delete this.icon;
                delete this.user_limit;
                delete this.bitrate;
                break;
            case ChannelEnum.GUILD_DIRECTORY:
                this.type ="GUILD_DIRECTORY";
                delete this.recipients;
                break;
            case ChannelEnum.GUILD_FORUM:
                this.type ="GUILD_FORUM";
                delete this.recipients;
                delete this.icon;
                delete this.user_limit;
                delete this.bitrate;
                break;
            case ChannelEnum.GUILD_NEWS:
                this.type ="GUILD_NEWS";
                delete this.recipients;
                delete this.icon;
                delete this.user_limit;
                delete this.bitrate;
                break;
            case ChannelEnum.GUILD_NEWS_THREAD:
                this.type ="GUILD_NEWS_THREAD";
                delete this.recipients;
                delete this.icon;
                delete this.user_limit;
                delete this.bitrate;
                break;
            case ChannelEnum.GUILD_PUBLIC_THREAD:
                this.type ="GUILD_PUBLIC_THREAD";
                delete this.recipients;
                delete this.icon;
                delete this.user_limit;
                delete this.bitrate;
                break;
            case ChannelEnum.GUILD_PRIVATE_THREAD:
                this.type ="GUILD_PRIVATE_THREAD";
                delete this.recipients;
                delete this.icon;
                delete this.user_limit;
                delete this.bitrate;
                break;
            case ChannelEnum.DM:
                this.type ="DM";
                delete this.guild_id;
                delete this.position;
                delete this.permission_overwrites;
                delete this.topic;
                delete this.nsfw;
                break;
            case ChannelEnum.GROUP_DM:
                this.type ="GROUP_DM";
                delete this.guild_id;
                delete this.position;
                delete this.permission_overwrites;
                delete this.topic;
                delete this.nsfw;
                break;
        }
    }

    async send(corp: string | MessageType): Promise<Message> {
        let content: MessageType; 
        if(typeof corp === "string"){
            content = { content: corp };
        } else {
            content = corp;
        }
        return new Message(this.client,await this.client.rest.post<MessageType>(`/channels/${this.id}/messages`, content));
    }
}

