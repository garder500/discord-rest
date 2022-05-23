import { Client } from "../index";
import ChannelType from "../types/ChannelType";
import UserType from "../types/UserType";
import Base from "./Base";
import Channel from "./Channel";
export default class User extends Base {
    username: string;
    created_at: number;
    public_flags: number | undefined;
    premium_type: number | undefined;
    flags: number | undefined;
    locale: string | undefined;
    bot: boolean;
    id: string;
    avatar: string | undefined;
    system: boolean;
    discriminator: number;
    banner: string | undefined;
    banner_color: string | undefined;
    accent_color: number | undefined;
    constructor(client: Client, user: UserType) {
        super(client);
        this.username = user.username;
        this.id = user.id;
        this.avatar = user.avatar;
        this.discriminator = user.discriminator;
        this.bot = user.bot ? true : false;
        this.system = user.system ? true : false;
        this.locale = user.locale;
        this.flags = user.flags;
        this.banner = user.banner;
        this.banner_color = user.banner_color;
        this.accent_color = user.accent_color;
        this.premium_type = user.premium_type;
        this.public_flags = user.public_flags;
        this.created_at = Number((BigInt(user.id) >> 22n) + 1420070400000n);
    };

    async createDM() {
        let channel = await this.client.rest.post<ChannelType>(`users/@me/channels`, {
            recipient_id: this.id
        });
        return new Channel(this.client,channel);
    }

    async getDMChannel() {
        if(super.client && super.client.user && super.client.user.id == this.id){
        let response = await this.client.rest.get<ChannelType>(`users/@me/channels`);
            return new Channel(this.client,response);
        }else{
            throw new Error("You can't get a DM channel with someone else");
        }
    }

    getAvatarURL(avatar: { size: number, format: string, dynamic: boolean } = { size: 2048, format: "png", dynamic: true }) {
        // check if the user has a default avatar
        if (this.avatar === undefined || this.avatar === null) {
            return `https://cdn.discordapp.com/embed/avatars/${this.discriminator % 5}.png`;
        } else {
            // check if the user has a custom avatar
            if (this.avatar.startsWith("a_")) {
                if (avatar.dynamic) {
                    return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.gif`;
                } else {
                    return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.png`;
                }
            } else {
                // check supported formats
                let formats = ["png", "jpeg", "webp", "gif"];
                if (avatar.format && formats.includes(avatar.format)) {
                    if (avatar.size) {
                        return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.${avatar.format}?size=${avatar.size}`;
                    } else {
                        return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.${avatar.format}`;
                    }
                }else{
                    return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.png`;
                }
            }
        }
    }

    getBannerURL(banner: { size: number, format: string, dynamic: boolean } = { size: 2048, format: "png", dynamic: true }) {
        // check if the user has a default banner
        if (this.banner === undefined || this.banner === null) {
            return null;
        }else{
            // check if the user has a custom banner
            if (this.banner.startsWith("a_")) {
                if (banner.dynamic) {
                    return `https://cdn.discordapp.com/banners/${this.id}/${this.banner}.gif`;
                } else {
                    return `https://cdn.discordapp.com/banners/${this.id}/${this.banner}.png`;
                }
            }else{
                // check supported formats
                let formats = ["png", "jpeg", "webp", "gif"];
                if (banner.format && formats.includes(banner.format)) {
                    if (banner.size) {
                        return `https://cdn.discordapp.com/banners/${this.id}/${this.banner}.${banner.format}?size=${banner.size}`;
                    } else {
                        return `https://cdn.discordapp.com/banners/${this.id}/${this.banner}.${banner.format}`;
                    }
                }else{
                    return `https://cdn.discordapp.com/banners/${this.id}/${this.banner}.png`;
                }
            }
        }
    }

    toJSON() {
        return {
            id: this.id,
            username: this.username,
            avatar: this.avatar,
            discriminator: this.discriminator,
            bot: this.bot,
            system: this.system,
            locale: this.locale,
            flags: this.flags,
            banner: this.banner,
            banner_color: this.banner_color,
            accent_color: this.accent_color,
            premium_type: this.premium_type,
            public_flags: this.public_flags,
            created_at: this.created_at
        }
    }
}