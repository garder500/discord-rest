import { fetch } from "../utils/request";
import FormData from "form-data";

type optionForRequest = {
    method: string,
    headers: {
        'Content-Type'?: string,
        'Authorization': string,
        'User-Agent': string,
        'Content-Length'?: string,
        'Content-Disposition'?: string,
    },
    body?: any,
}

export class RestManager {
    private baseURL: string;
    private token: string;
    private version: number;
    private headers: optionForRequest["headers"];

    constructor(token: string, version : number=10) {
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

    private async request(endpoint: string, method: string, body: any = null): Promise<Error | null | any> {
        let url = this.baseURL + endpoint;
        let options: optionForRequest = {
            method: method,
            headers: this.headers
        };
        if (body) {
            options.body = body;
            if(body instanceof FormData) {
                options.headers['Content-Type'] = 'multipart/form-data';
                options.headers['Content-Disposition'] = body.getHeaders()['content-disposition'];
            }
        }

        let response = await fetch(url, options);
        if (response.status === 204) {
            return null;
        }
        let responseBody = await response.json();
        if (response.status !== 200 && response.status !== 201) {
            throw new Error(responseBody.message);
        }
        return responseBody;
    }

    public async get(endpoint: string): Promise<any> {
        return await this.request(endpoint, 'GET', null);
    }

    public async post(endpoint: string, body: any): Promise<any> {
        return await this.request(endpoint, 'POST', body);
    }

    public async put(endpoint: string, body: any): Promise<any> {
        return await this.request(endpoint, 'PUT', body);
    }

    public async delete(endpoint: string, body: any): Promise<any> {
        return await this.request(endpoint, 'DELETE', body);
    }

    public async patch(endpoint: string, body: any): Promise<any> {
        return await this.request(endpoint, 'PATCH', body);
    }
    
}