export interface UserType {
    id:string;
    username:string;
    discriminator:number;
    avatar?:string;
    bot?:boolean;
    banner?:string;
    flags?:number;
    locale?:string;
    premium_type?:number;
    public_flags?:number;
    system?:boolean;
    created_at?:number;
    banner_color?:string;
    accent_color?:number;
}

export interface AvatarFormat { 
    size?: number, 
    format?: string, 
    dynamic?: boolean 
}