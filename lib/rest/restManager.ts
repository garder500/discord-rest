import fetch from "../utils/request";
import FormData from "form-data";
import util from "util";
import { RequestInit } from "node-fetch";

export interface RequestOptions extends RequestInit {
    headers?: {
        [key: string]: string;
    };
}


export class RestManager {
    private baseURL: string;
    readonly token: string;
    readonly version: number;
    private headers: RequestOptions["headers"];

    constructor(token: string, version =10) {
        this.baseURL = `https://discord.com/api/v${version}/`;
        this.token = token;
        this.version = version;
        this.headers = {
            "Authorization": `Bot ${this.token}`,
            "User-Agent": "DiscordBot (bot-creator, 0.0.1)"
        };
    }
    // make a function that can be used to make a GET request to the API using the baseURL and the endpoint with fetch
    // the headers are set in the function and are the default headers
    // the function returns a promise that resolves to the response

    private async request<T>(endpoint: string, method: string, body: RequestOptions["body"] | null = null): Promise<T> {
        const url = this.baseURL + endpoint;
        const options: RequestOptions = {
            method: method,
            headers: {
                ...this.headers,
                'Content-Type': 'application/json',
                'Content-Length': body ? String(Buffer.byteLength(JSON.stringify(body))) : String(0),
                'Content-Disposition': 'form-data'
            },
        };
        if (body) {
            if(body instanceof FormData) {
                options.body = body;
                }
            }else{
                options.body = JSON.stringify(body);
            }
        if(options.headers){
            if(body instanceof FormData){
                options.headers['Content-Type'] = 'multipart/form-data';
                options.headers['Content-Disposition'] = body.getHeaders()['content-disposition'];
                options.headers['Content-Length'] = body.getLengthSync().toString();
            }else{
                options.headers['Content-Type'] = 'application/json';
            }
        }


        const response = await fetch(url, options);
        if (response.status === 204) {
            return await response.json();   
        }
        const responseBody = await response.json();
        if (response.status !== 200 && response.status !== 201) {
            console.error(util.inspect(responseBody, { depth: null }));
            throw new Error(responseBody.message);
        }
        return responseBody;
    }

    public async get<T>(endpoint: string): Promise<T> {
        return await this.request<T>(endpoint, 'GET', null);
    }

    public async post<T>(endpoint: string, body: RequestOptions["body"]): Promise<T> {
        return await this.request<T>(endpoint, 'POST', body);
    }

    public async put<T>(endpoint: string, body: RequestOptions["body"]): Promise<T> {
        return await this.request<T>(endpoint, 'PUT', body);
    }

    public async delete<T>(endpoint: string): Promise<T> {
        return await this.request<T>(endpoint, 'DELETE');
    }

    public async patch<T>(endpoint: string, body: RequestOptions["body"]): Promise<T> {
        return await this.request<T>(endpoint, 'PATCH', body);
    }
    
}